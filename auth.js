// auth.js — protection des pages ARK
// Session email+password — 7 jours si "se souvenir de moi"

const SUPABASE_URL = 'https://wlwwkqijedhxmwjktqvj.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsd3drcWlqZWRoeG13amt0cXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDY0NDcsImV4cCI6MjA5MDEyMjQ0N30.x4nGTPYfLbkPz0tAejhde_RO4Oto5scGSW8H72FwKOU';

const _db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: { persistSession: true, storageKey: 'ark_session' }
});

document.documentElement.style.visibility = 'hidden';

const BASE = '/arkformation';

(async () => {
  const { data: { session } } = await _db.auth.getSession();

  // Pas connecté → login
  if (!session) {
    window.location.href = BASE + '/login.html';
    return;
  }

  // Vérifier l'expiry "se souvenir de moi"
  const expiry = localStorage.getItem('ark_remember_expiry');
  if (expiry && Date.now() > parseInt(expiry)) {
    await _db.auth.signOut();
    localStorage.removeItem('ark_remember_expiry');
    window.location.href = BASE + '/login.html';
    return;
  }

  // Vérifier l'accès à la formation (ark_platform uniquement)
  const isPlatform = window.location.pathname.includes('ark_platform');
  if (isPlatform) {
    const hasAccess = await checkPlatformAccess(session.user.id);
    if (!hasAccess) {
      window.location.href = BASE + '/ark_dashboard.html#reglages';
      return;
    }
  }

  // Exposer les helpers
  window.ARK = {
    db: _db,
    session,
    user: session.user,
    email: session.user.email,
    name: session.user.user_metadata?.full_name || session.user.email.split('@')[0],
    async logout() {
      localStorage.removeItem('ark_remember_expiry');
      await _db.auth.signOut();
      window.location.href = BASE + '/login.html';
    }
  };

  document.documentElement.style.visibility = 'visible';
})();

async function checkPlatformAccess(userId) {
  const { data, error } = await _db
    .from('user_access')
    .select('id')
    .eq('user_id', userId)
    .eq('active', true)
    .single();
  return !error && !!data;
}
