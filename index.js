// server/index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let tournois = [
  {
    id: 1,
    nom: "Battle Royale #1",
    date: "2026-01-25",
    heure: "20:00",
    prix: "100€",
    mode: "Squad",
    placesRestantes: 8
  },
  {
    id: 2,
    nom: "Solo Clash",
    date: "2026-01-26",
    heure: "18:00",
    prix: "50€",
    mode: "Solo",
    placesRestantes: 12
  }
];

// Récupérer la liste des tournois
app.get("/api/tournois", (req, res) => {
  res.json(tournois);
});

// Inscription à un tournoi
app.post("/api/tournois/:id/inscription", (req, res) => {
  const id = parseInt(req.params.id);
  const tournoi = tournois.find(t => t.id === id);
  if (tournoi && tournoi.placesRestantes > 0) {
    tournoi.placesRestantes -= 1;
    res.json({ success: true, message: "Inscription réussie !" });
  } else {
    res.status(400).json({ success: false, message: "Plus de places disponibles." });
  }
});

app.listen(5000, () => console.log("Serveur lancé sur http://localhost:5000"));
