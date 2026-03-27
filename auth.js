<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ARK — Créer un compte</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<style>
*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
:root {
  --accent:#0071e3; --accent-h:#0077ed;
  --bg:#f5f5f7; --white:#fff;
  --text-1:#1d1d1f; --text-2:#6e6e73;
  --border:rgba(0,0,0,0.1); --red:#ff3b30; --green:#34c759;
}
body { font-family:'Inter',-apple-system,sans-serif; background:var(--bg); min-height:100vh; display:flex; align-items:center; justify-content:center; padding:24px; -webkit-font-smoothing:antialiased; }
.card { background:var(--white); border-radius:22px; padding:40px 36px; width:100%; max-width:420px; box-shadow:0 2px 40px rgba(0,0,0,0.08); }
.logo { font-family:'Times New Roman',serif; font-size:22px; letter-spacing:.2em; color:var(--text-1); margin-bottom:28px; }
h1 { font-size:24px; font-weight:600; letter-spacing:-.02em; margin-bottom:6px; }
.sub { font-size:14px; color:var(--text-2); font-weight:300; margin-bottom:28px; line-height:1.5; }
.field { margin-bottom:14px; }
label { display:block; font-size:13px; font-weight:500; margin-bottom:6px; }
input[type="text"], input[type="email"], input[type="password"] { width:100%; padding:11px 14px; border:1.5px solid var(--border); border-radius:10px; font-size:15px; font-family:inherit; color:var(--text-1); outline:none; transition:border-color .15s; }
input:focus { border-color:var(--accent); }
.hint { font-size:12px; color:var(--text-2); font-weight:300; margin-top:5px; }
.strength { height:4px; border-radius:2px; margin-top:6px; background:var(--border); overflow:hidden; }
.strength-fill { height:100%; border-radius:2px; width:0; transition:width .3s, background .3s; }
.btn { width:100%; padding:12px; background:var(--accent); color:#fff; font-size:15px; font-weight:600; border:none; border-radius:980px; cursor:pointer; font-family:inherit; transition:background .15s; display:flex; align-items:center; justify-content:center; gap:8px; margin-top:6px; }
.btn:hover { background:var(--accent-h); }
.btn:disabled { opacity:.5; cursor:not-allowed; }
.spinner { width:16px; height:16px; border:2px solid rgba(255,255,255,0.4); border-top-color:#fff; border-radius:50%; animation:spin .7s linear infinite; display:none; }
@keyframes spin { to { transform:rotate(360deg); } }
.alert { display:none; margin-top:14px; padding:11px 14px; border-radius:10px; font-size:13px; line-height:1.5; }
.alert.error { background:rgba(255,59,48,.08); color:#c0392b; border:1px solid rgba(255,59,48,.15); }
.alert.success { background:rgba(52,199,89,.08); color:#1a7431; border:1px solid rgba(52,199,89,.15); }
.divider { height:1px; background:var(--border); margin:22px 0; }
.footer-link { text-align:center; font-size:13px; color:var(--text-2); font-weight:300; }
.footer-link a { color:var(--accent); text-decoration:none; font-weight:500; }
.back { position:fixed; top:20px; left:20px; font-size:15px; font-weight:500; color:var(--text-2); text-decoration:none; transition:color .15s; }
.back:hover { color:var(--text-1); }
</style>
</head>
<body>
<a href="index.html" class="back">← Retour</a>
<div class="card">
  <div class="logo">ARK</div>
  <h1>Créer un compte</h1>
  <p class="sub">Rejoins le programme ARK Macro Trading.</p>

  <div class="field">
    <label for="name">Prénom</label>
    <input type="text" id="name" placeholder="Ton prénom" autocomplete="given-name">
  </div>
  <div class="field">
    <label for="email">Email</label>
    <input type="email" id="email" placeholder="ton@email.com" autocomplete="email">
  </div>
  <div class="field">
    <label for="password">Mot de passe</label>
    <input type="password" id="password" placeholder="8 caractères minimum" autocomplete="new-password" oninput="checkStrength(this.value)">
    <div class="strength"><div class="strength-fill" id="strength-fill"></div></div>
    <div class="hint" id="strength-hint">Utilise au moins 8 caractères.</div>
  </div>
  <div class="field">
    <label for="confirm">Confirmer le mot de passe</label>
    <input type="password" id="confirm" placeholder="••••••••" autocomplete="new-password">
  </div>

  <button class="btn" id="btn" onclick="signup()">
    <span id="btn-text">Créer mon compte</span>
    <div class="spinner" id="spinner"></div>
  </button>
  <div class="alert" id="alert"></div>

  <div class="divider"></div>
  <div class="footer-link">Déjà un compte ? <a href="login.html">Se connecter</a></div>
</div>

<script>
const SUPABASE_URL = 'https://wlwwkqijedhxmwjktqvj.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indsd3drcWlqZWRoeG13amt0cXZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDY0NDcsImV4cCI6MjA5MDEyMjQ0N30.x4nGTPYfLbkPz0tAejhde_RO4Oto5scGSW8H72FwKOU';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
  auth: { persistSession: true, storageKey: 'ark_session' }
});

function checkStrength(val) {
  const fill = document.getElementById('strength-fill');
  const hint = document.getElementById('strength-hint');
  let score = 0;
  if (val.length >= 8) score++;
  if (val.length >= 12) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^a-zA-Z0-9]/.test(val)) score++;

  const pct = Math.min(100, score * 20) + '%';
  const colors = ['#ff3b30','#ff9500','#ff9500','#34c759','#34c759'];
  const labels = ['Très faible','Faible','Moyen','Fort','Très fort'];
  fill.style.width = pct;
  fill.style.background = colors[score] || '#ff3b30';
  hint.textContent = score === 0 ? 'Utilise au moins 8 caractères.' : labels[score - 1] || labels[0];
}

function setLoading(on) {
  document.getElementById('btn').disabled = on;
  document.getElementById('btn-text').textContent = on ? 'Création…' : 'Créer mon compte';
  document.getElementById('spinner').style.display = on ? 'block' : 'none';
}

function showAlert(msg, type) {
  const el = document.getElementById('alert');
  el.textContent = msg;
  el.className = 'alert ' + type;
  el.style.display = 'block';
}

async function signup() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm').value;

  document.getElementById('alert').style.display = 'none';

  if (!name || !email || !password || !confirm) { showAlert('Remplis tous les champs.', 'error'); return; }
  if (password.length < 8) { showAlert('Le mot de passe doit contenir au moins 8 caractères.', 'error'); return; }
  if (password !== confirm) { showAlert('Les mots de passe ne correspondent pas.', 'error'); return; }

  setLoading(true);

  const { data, error } = await db.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name }
    }
  });

  if (error) {
    setLoading(false);
    const msg = error.message.includes('already') ? 'Un compte existe déjà avec cet email.' : error.message;
    showAlert(msg, 'error');
    return;
  }

  // Compte créé + auto-connecté (si confirmation email désactivée)
  if (data.session) {
    window.location.href = 'ark_dashboard.html';
  } else {
    setLoading(false);
    showAlert('Compte créé ! Vérifie tes emails pour confirmer ton adresse.', 'success');
  }
}

document.addEventListener('keydown', e => { if (e.key === 'Enter') signup(); });
</script>
</body>
</html>
