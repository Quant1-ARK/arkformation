// auth.js — à inclure dans toutes les pages protégées
// Usage : <script src="auth.js"></script>  (avant tout autre script)

const SUPABASE_URL = 'https://wlwwkqijedhxmwjktqvj.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsd3drcWlqZWRoeG13amt0cXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDY0NDcsImV4cCI6MjA5MDEyMjQ0N30.x4nGTPYfLbkPz0tAejhde_RO4Oto5scGSW8H72FwKOU';

// Créer le client Supabase
const _supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// Masquer la page pendant la vérification
document.documentElement.style.visibility = 'hidden';

(async () => {
  // Gérer le callback du magic link (hash dans l'URL)
  if (window.location.hash && window.location.hash.includes('access_token')) {
    const { error } = await _supabase.auth.setSession({
      access_token: new URLSearchParams(window.location.hash.slice(1)).get('access_token'),
      refresh_token: new URLSearchParams(window.location.hash.slice(1)).get('refresh_token'),
    });
    if (!error) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }

  const { data: { session } } = await _supabase.auth.getSession();

  if (!session) {
    window.location.href = '/arkformation/login.html';
    return;
  }

  // Exposer les helpers globalement
  window.ARK = {
    supabase: _supabase,
    session,
    user: session.user,
    email: session.user.email,

    async logout() {
      await _supabase.auth.signOut();
      window.location.href = '/arkformation/login.html';
    }
  };

  // Afficher la page
  document.documentElement.style.visibility = 'visible';
})();
