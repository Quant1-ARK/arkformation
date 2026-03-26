const module08 = {
  id: 8,
  title: "Gestion du Risque",
  tags: ["Stop loss", "Position sizing", "Corrélations"],
  intro: "Stop loss, position sizing, corrélations entre positions — construire un système de protection qui survit aux marchés adverses sans tuer la performance.",
  quote: { text: "Les grands traders ne gagnent pas plus souvent. Ils perdent moins.", source: "Principe fondamental — ARK" },
  objectives: [
    "Concevoir un système de gestion du risque adapté à son profil",
    "Placer des stop loss logiques et non arbitraires",
    "Calculer l'exposition réelle d'un portefeuille en tenant compte des corrélations",
    "Définir son risque maximal par trade et par mois",
  ],
  concepts: [
    { icon: "🛑", name: "Stop loss", desc: "L'ordre qui protège le capital quand le marché va contre soi" },
    { icon: "📏", name: "Risk/Reward", desc: "Le rapport entre le gain potentiel et la perte maximale" },
    { icon: "🔗", name: "Corrélations", desc: "Deux positions corrélées, c'est le même risque déguisé" },
    { icon: "💰", name: "Risque par trade", desc: "Le pourcentage du capital qu'on accepte de perdre" },
  ]
};
