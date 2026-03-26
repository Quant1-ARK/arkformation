const module01 = {
  id: 1,
  title: "Introduction : Le Cadre de Pensée",
  tags: ["Profils d'investisseurs", "Retail vs Institutionnel", "Gestion du risque", "Intérêts composés"],
  intro: "Investisseur, Trader, Spéculateur : qui êtes-vous vraiment, et que cherchez-vous à construire ? Avant d'apprendre à lire un bilan ou anticiper un mouvement macro, il faut répondre à cette question fondamentale — elle conditionne tout : votre méthode, votre horizon de temps, votre gestion du risque, et votre état d'esprit face à l'incertitude.",
  quote: { text: "Votre edge n'est pas la vitesse, ni le volume : c'est l'analyse, la patience et la discipline.", source: "ARK — Module 01" },
  objectives: [
    "Distinguer les trois profils d'intervenants : investisseur, trader et spéculateur",
    "Comprendre les différences structurelles entre trader retail et institutionnel",
    "Identifier les causes systématiques d'échec des particuliers sur les marchés",
    "Calibrer ses objectifs de rendement et comprendre la puissance des intérêts composés",
    "Découvrir les grandes classes d'actifs sur lesquelles s'applique la méthode",
  ],
  concepts: [
    { icon: "🧭", name: "Les 3 profils", desc: "Investisseur (valeur long terme), Trader (thèse macro), Spéculateur (flux court terme)" },
    { icon: "⚖️", name: "Retail vs Institutionnel", desc: "Agilité et liberté du retail face à l'infrastructure et aux contraintes des fonds" },
    { icon: "📈", name: "Intérêts composés", desc: "Capital final = Capital initial × (1 + r)ⁿ — le temps est l'actif le plus précieux" },
    { icon: "🛡️", name: "Gestion du risque", desc: "Sans garde-fou externe, le retail trader doit s'imposer ses propres règles de discipline" },
  ],
  body: `
    <h2 id="section-profils">1. Les trois profils : état des lieux</h2>
    <p>Il existe trois grands profils d'intervenants sur les marchés financiers. Cette formation se concentre sur le profil du trader — c'est celui que vous allez construire. Les deux autres profils sont présentés ici pour que vous sachiez exactement où vous vous situez, et pourquoi le trading représente une voie distincte avec ses propres exigences.</p>

    <div class="profile-block">
      <h3>L'investisseur</h3>
      <p>L'investisseur achète de la valeur. Il s'intéresse à ce qu'un actif vaut fondamentalement — ses flux futurs, sa position compétitive, les dynamiques macro qui l'entourent — et parie sur la convergence entre prix et valeur sur un horizon long (plusieurs mois à plusieurs années). Il bouge peu, paie peu de frais, et laisse le temps travailler pour lui. La stratégie Buy and Hold, dont la rentabilité historique est solidement documentée, est l'expression la plus pure de cette approche. Exemples : Warren Buffett et Charlie Munger (Berkshire Hathaway), Peter Lynch avec le Fonds Magellan.</p>
      <div class="profile-meta">Horizon : mois à années — Outil central : modélisation de valeur — Rapport au prix : secondaire</div>
    </div>

    <div class="profile-block">
      <h3>Le trader — le profil que ce cours vous forme à développer</h3>
      <p>Le trader construit des thèses fondamentales — macro, géopolitique, cycle sectoriel — et les exprime via des positions tenues de quelques jours à quelques mois. Il ne cherche pas à capter chaque mouvement, mais à se positionner sur des tendances de fond avant qu'elles ne soient pleinement intégrées par le marché. Son travail est de développer et d'exécuter des stratégies capables de battre le marché de façon répétable et documentée. C'est une activité hybride : mi-analyste, mi-gestionnaire de risque, et toujours ancrée dans une vision macro du monde. Exemples : George Soros (pari contre la livre sterling en 1992), Stanley Druckenmiller, Ray Dalio.</p>
      <div class="profile-meta">Horizon : jours à mois — Outil central : thèse macro + timing d'entrée — Rapport au prix : point d'entrée et de sortie</div>
    </div>

    <div class="profile-block">
      <h3>Le spéculateur</h3>
      <p>Le spéculateur trade le prix, pas la valeur. Il cherche à profiter des déséquilibres à court terme : réactions à des annonces, flux de liquidité, microstructure de marché. C'est une activité légitime, mais qui requiert une infrastructure, une discipline d'exécution et une gestion du risque que la plupart des particuliers ne possèdent pas. Exemple : Paul Tudor Jones sur certaines stratégies court terme, ou les desks propriétaires des grandes banques d'investissement.</p>
      <div class="profile-meta">Horizon : secondes à jours — Outil central : lecture du flux et du prix — Rapport à la valeur : inexistant ou marginal</div>
    </div>

    <h2 id="section-retail-instit">2. Trader Retail vs Trader Institutionnel</h2>
    <p>Avant d'apprendre à trader, il faut comprendre dans quel environnement vous évoluez — et en quoi il diffère radicalement de celui des acteurs institutionnels. Cette distinction n'est pas anodine : elle conditionne votre stratégie, vos outils, vos horizons de temps, et surtout vos avantages et limitations réels.</p>

    <h3>L'infrastructure : un monde radicalement différent</h3>
    <p>Un trader institutionnel opère depuis une salle des marchés dotée d'une infrastructure technologique de pointe : connexions co-localisées aux bourses (latence inférieure à la milliseconde), flux de données Bloomberg et Reuters en temps réel, accès direct au marché (DMA), outils de risk management automatisés, et parfois des algorithmes d'exécution propriétaires. Le coût annuel d'une telle infrastructure se chiffre en centaines de milliers, voire en millions d'euros.</p>
    <p>En tant que trader retail, votre infrastructure se résume à un ordinateur, une connexion internet correcte, un courtier en ligne, et un accès à des données publiques (TradingView, FRED, les sites des banques centrales, les rapports SEC). C'est peu — mais c'est suffisant, à condition de l'utiliser intelligemment. La révolution de l'information a considérablement réduit l'avantage informationnel des institutionnels sur les données macro publiques.</p>

    <h3>Le capital et les attentes de performance</h3>
    <p>Un fonds institutionnel gère des volumes qui rendent impossible toute agilité tactique. Un hedge fund gérant 5 milliards de dollars ne peut pas prendre une position sur une small cap sans déplacer le marché lui-même. Ses attentes de performance sont également contraintes : un fonds doit justifier ses frais de gestion (typiquement 2 % de l'actif géré + 20 % de la performance), respecter ses mandats, et rendre des comptes trimestriels à ses investisseurs.</p>
    <p>Vous, en tant que retail trader, pouvez entrer et sortir d'une position en quelques secondes, sur n'importe quel actif liquide, sans impact sur le cours. C'est un avantage structurel considérable. Vous n'avez de comptes à rendre à personne, pas de mandat restrictif, pas de drawdown maximum contractuel qui vous force à liquider au pire moment.</p>

    <h3>Les limitations du trader retail</h3>
    <ul>
      <li><strong>Le coût du capital :</strong> vous tradez votre propre argent, ce qui crée une pression psychologique absente chez un employé de banque qui risque le capital de son établissement.</li>
      <li><strong>L'absence de flux propriétaire :</strong> les institutionnels voient les ordres avant leur exécution (order flow), ce qui leur confère une lecture de la microstructure du marché inaccessible au retail.</li>
      <li><strong>La fiscalité :</strong> en France, les plus-values de cession sont imposées à la flat tax de 30 % (ou au barème progressif), ce qui nécessite une gestion rigoureuse de votre enveloppe fiscale.</li>
      <li><strong>Le levier limité :</strong> la réglementation ESMA plafonne le levier disponible pour les retail traders européens sur CFD (5:1 sur les indices, 2:1 sur les cryptos).</li>
    </ul>

    <h3>Les avantages structurels du trader retail</h3>
    <ul>
      <li><strong>L'agilité :</strong> vous pouvez vous positionner sur des opportunités que les gros fonds ne peuvent physiquement pas toucher — les actifs à faible capitalisation, les marchés de niche, les situations spéciales.</li>
      <li><strong>L'absence de contrainte de mandat :</strong> vous pouvez vendre à découvert un actif survalorisé, investir dans les cryptos, les matières premières, les devises émergentes, sans restriction.</li>
      <li><strong>L'absence de pression de reporting :</strong> vous n'avez pas à montrer une performance positive chaque trimestre, ce qui vous permet de tenir des positions plus longtemps et d'éviter le forced selling.</li>
      <li><strong>Un objectif personnel de rendement différent :</strong> 15 % annualisé sur 50 000 € peut transformer votre vie — ce même rendement serait insuffisant pour un fonds qui doit couvrir ses frais structurels.</li>
    </ul>

    <h3>La psychologie et la gestion du risque : des logiques opposées</h3>
    <p>La gestion du risque institutionnelle est systématique et codée : Value at Risk (VaR), limites de concentration par actif, stress tests réglementaires, risk officers indépendants du trading desk. Le trader retail n'a rien de tout ça — il est juge et partie. C'est à la fois sa force (flexibilité totale) et son premier risque (aucun garde-fou extérieur). D'où l'importance capitale de se doter de règles de gestion du risque explicites, documentées, et d'une discipline d'exécution aussi rigoureuse que celle d'un professionnel.</p>

    <blockquote>En résumé : vous n'êtes pas un institutionnel en miniature. Vous êtes un acteur différent, avec des contraintes différentes, des avantages différents — et une stratégie qui doit en tenir compte. Votre edge n'est pas la vitesse, ni le volume : c'est l'analyse, la patience et la discipline.</blockquote>

    <h2 id="section-formation">3. Ce que ce cours vous forme à faire</h2>
    <p>Cette formation vous prépare à devenir un trader à dominante fondamentale. Concrètement, cela signifie :</p>
    <ul>
      <li>Comprendre les dynamiques macro et géopolitiques qui créent des opportunités</li>
      <li>Modéliser la valeur d'un actif pour distinguer une opportunité d'un piège</li>
      <li>Construire une thèse d'investissement complète et chiffrée</li>
      <li>Dimensionner correctement vos positions et gérer votre risque</li>
      <li>Tenir vos convictions sous pression, et les abandonner quand les faits changent</li>
    </ul>
    <p>Notre travail en tant que particuliers s'assimile davantage à celui d'un chercheur et d'un quant qu'à celui d'un trader en salle des marchés. Nous ne sommes pas là pour prendre des positions en rafale — nous sommes là pour trouver un edge, un avantage compétitif sur les autres participants du marché.</p>
    <p>Vous êtes à la fois trader, risk manager, analyste macro et gérant de portefeuille. C'est exigeant, mais c'est aussi ce qui rend cette activité intellectuellement stimulante. <strong>Vous êtes un fond d'investissement indépendant.</strong></p>

    <h2 id="section-taux-horaire">4. Réfléchir en taux horaire</h2>
    <p>Il n'existe aucune relation entre le nombre d'heures passées à ouvrir des positions et l'argent généré. Au contraire, plus vous tradez, plus vous payez de frais et plus vous vous exposez au bruit du marché. La formule du taux horaire réel est simple :</p>

    <div class="formula-box">
      Taux horaire réel = Revenus mensuels ÷ (Heures travaillées / semaine × 4,33)<br>
      <small style="font-size:12px;opacity:0.7">Le 4,33 correspond au nombre moyen de semaines par mois : 52 semaines ÷ 12 mois. C'est le même coefficient utilisé en droit du travail français (35h × 4,33 = 151,67h).</small>
    </div>

    <p>Exemple concret : vous gagnez 5 000 € par mois grâce au trading actif, en travaillant 40 heures par semaine :</p>
    <div class="formula-box">5 000 € ÷ (40h × 4,33) = 5 000 € ÷ 173h ≈ <strong>28,9 € / heure</strong> — soit environ le salaire médian français.</div>
    <p>À l'inverse, un investisseur passif qui génère les mêmes 5 000 € par mois en consacrant 1 heure par semaine à son portefeuille a un taux horaire démentiel — et dort mieux la nuit. L'objectif n'est pas de passer le plus de temps possible sur les marchés. C'est de construire un processus de décision robuste qui vous permette de dégager du temps, pas d'en consommer.</p>

    <h2 id="section-echecs">5. Pourquoi la majorité des particuliers échouent</h2>
    <p>Les causes d'échec sont systématiques et prévisibles :</p>
    <ul>
      <li><strong>Absence de profil clair :</strong> confondre trading et investissement</li>
      <li><strong>Frais et fiscalité ignorés :</strong> sous-estimer les frais de transaction qui rongent silencieusement la performance</li>
      <li><strong>Overtrading émotionnel :</strong> trader trop souvent, trop vite, sous l'influence des émotions</li>
      <li><strong>Biais cognitifs :</strong> couper les bonnes positions trop tôt, laisser courir les mauvaises trop longtemps</li>
      <li><strong>Survivorship bias :</strong> s'inspirer des success stories sans voir les milliers de parcours similaires qui ont échoué</li>
      <li><strong>Absence de méthode :</strong> ne pas avoir de processus documenté ni de critères d'entrée/sortie définis à l'avance</li>
      <li><strong>Le piège du scalping et du day-trading :</strong> multiplier les trades augmente mécaniquement le stress, expose davantage au bruit du marché et fait exploser les frais de transaction. Chaque aller-retour coûte un spread, une commission, parfois un financement overnight. Nous privilégions le swing trading et le position trading : moins de positions, mieux construites, tenues le temps que la thèse fondamentale se réalise.</li>
      <li><strong>Méthodes miracles :</strong> croire à des approches comme le SMC (Smart Money Concept) ou l'ICT, présentées comme des systèmes universels. Ces approches reposent souvent sur des concepts non falsifiables et une esthétique de la complexité qui donne l'illusion de maîtrise. Ce cours ne vous vend pas un système — il vous construit une méthode robuste d'analyse fondamentale et macro, applicable à n'importe quel actif et n'importe quel cycle de marché.</li>
    </ul>

    <h2 id="section-capital">6. Capital, objectifs et attentes réalistes</h2>
    <p>Toute stratégie d'investissement sérieuse commence par une question honnête : avec quel capital je travaille, et quel rendement est réaliste ? La vraie variable, ce n'est pas le capital de départ — c'est le temps et la discipline.</p>

    <h3>La puissance des intérêts composés</h3>
    <div class="formula-box">Capital final = Capital initial × (1 + r)ⁿ<br><small style="font-size:12px;opacity:0.7">où r = rendement annuel, n = nombre d'années</small></div>
    <ul>
      <li>10 000 € investis à 12 % / an pendant 20 ans = <strong>96 462 €</strong> — soit presque 10× sans jamais rajouter un euro</li>
      <li>Le même capital à 15 % / an pendant 20 ans = <strong>163 665 €</strong> — 3 points de rendement supplémentaires font plus que doubler le résultat final</li>
      <li>Rajouter 500 € par mois à ce même portefeuille à 12 % sur 20 ans donne environ <strong>494 000 €</strong></li>
    </ul>
    <p>La conclusion est simple : le temps est votre actif le plus précieux, et un rendement régulier et documenté bat presque toujours une performance spectaculaire mais erratique.</p>

    <h3>Le levier financier</h3>
    <p>Si le temps long vous semble insuffisant, il existe des mécanismes pour accélérer le processus. Le principal est le levier financier : emprunter du capital pour amplifier l'exposition à un actif. Un exemple simplifié : avec 10 000 € et un levier de 3×, vous contrôlez une position de 30 000 €. Un mouvement de +10 % sur l'actif vous rapporte 3 000 € — soit 30 % de votre capital initial.</p>
    <div class="warning-box">⚠️ Le levier amplifie les pertes exactement de la même façon qu'il amplifie les gains. Le même mouvement de -10 % efface 30 % de votre capital. C'est un outil puissant, pas une solution miracle. Nous lui consacrerons un module entier.</div>

    <h3>Repères de capital pour calibrer vos objectifs</h3>
    <ul>
      <li><strong>2 000 – 10 000 € :</strong> vous apprenez et testez votre méthode en conditions réelles, avec un risque maîtrisé</li>
      <li><strong>10 000 – 50 000 € :</strong> vous construisez un vrai portefeuille et commencez à voir les effets de la capitalisation</li>
      <li><strong>50 000 €+ :</strong> vous gérez réellement un patrimoine et pouvez envisager des stratégies plus sophistiquées</li>
    </ul>
    <p>Le point de départ importe moins que la régularité et la rigueur du processus. Un investisseur avec 5 000 € et une méthode solide surpassera presque toujours un investisseur avec 100 000 € qui improvise.</p>

    <h2 id="section-actifs">7. Les classes d'actifs : un panorama rapide</h2>
    <p>La méthode que vous allez apprendre dans ce cours s'applique à l'ensemble des marchés financiers. Voici les grandes familles d'actifs que vous rencontrerez :</p>
    <ul>
      <li><strong>Actions :</strong> les entreprises cotées en bourse. L'actif le plus connu, et celui sur lequel la modélisation fondamentale est la plus directement applicable.</li>
      <li><strong>Obligations :</strong> titres de dette émis par des États ou des entreprises. Très sensibles aux taux d'intérêt et aux cycles macro — un outil clé pour lire l'état de l'économie mondiale.</li>
      <li><strong>Matières premières :</strong> pétrole, gaz, métaux, matières agricoles. Directement liées aux dynamiques géopolitiques et aux cycles d'offre/demande mondiaux.</li>
      <li><strong>Forex :</strong> paires de devises comme EUR/USD ou USD/JPY. Le marché le plus liquide au monde, piloté par les politiques monétaires et les flux de capitaux internationaux.</li>
      <li><strong>Indices et ETF :</strong> paniers d'actifs qui répliquent un indice (S&P 500, CAC 40…) ou une thématique. Utiles pour exprimer une thèse macro sans choisir un titre spécifique.</li>
      <li><strong>Cryptomonnaies :</strong> Bitcoin, Ethereum et autres. Un marché jeune, volatil, mais de plus en plus intégré aux flux macro institutionnels.</li>
    </ul>

    <h2 id="section-conclusion">8. Ce que vous allez construire dans ce cours</h2>
    <p>À l'issue de cette formation, vous aurez un cadre de pensée complet et personnel :</p>
    <ul>
      <li>Une compréhension des mécanismes économiques et géopolitiques qui meuvent les marchés</li>
      <li>La capacité à modéliser la valeur d'un actif et à construire une thèse chiffrée</li>
      <li>Un processus de prise de position, de dimensionnement et de gestion du risque</li>
      <li>Une discipline psychologique pour tenir vos convictions et accepter vos erreurs</li>
    </ul>
    <div class="summary-box">Chaque module de ce cours est un outil supplémentaire dans ce cadre. Gardez toujours en tête le fil conducteur : <strong>comprendre le monde → lire la valeur → prendre position → protéger le capital.</strong></div>
  `
};
