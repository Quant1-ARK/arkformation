// auth.js — protection des pages ARK
// - ark_platform.html : session + accès activé requis → sinon → dashboard réglages

const SUPABASE_URL = 'https://wlwwkqijedhxmwjktqvj.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsd3drcWlqZWRoeG13amt0cXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDY0NDcsImV4cCI6MjA5MDEyMjQ0N30.x4nGTPYfLbkPz0tAejhde_RO4Oto5scGSW8H72FwKOU';

const _db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

document.documentElement.style.visibility = 'hidden';

const BASE = '/arkformation';

(async () => {
  // Gérer le callback du magic link
  const hash = window.location.hash;
  if (hash && hash.includes('access_token')) {
    const params = new URLSearchParams(hash.slice(1));
    await _db.auth.setSession({
      access_token: params.get('access_token'),
      refresh_token: params.get('refresh_token'),
    });
    window.history.replaceState(null, '', window.location.pathname);
  }

  const { data: { session } } = await _db.auth.getSession();

  // Pas connecté → login
  if (!session) {
    window.location.href = BASE + '/login.html';
    return;
  }

  // Vérifier l'accès à la formation
  const hasAccess = await checkPlatformAccess(session.user.id);
  if (!hasAccess) {
    // Pas d'accès → dashboard onglet réglages
    window.location.href = BASE + '/ark_dashboard.html#reglages';
    return;
  }

  // Tout bon — exposer les helpers
  window.ARK = {
    db: _db,
    session,
    user: session.user,
    email: session.user.email,
    async logout() {
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
