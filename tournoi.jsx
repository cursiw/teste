// src/pages/TournoisActifs.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function TournoisActifs() {
  const [tournois, setTournois] = useState([]);
  const [filtre, setFiltre] = useState("Tous");
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/tournois").then(res => setTournois(res.data));
  }, []);

  const handleInscription = async (id) => {
    try {
      const res = await axios.post(`http://localhost:5000/api/tournois/${id}/inscription`);
      setMessage(res.data.message);
      // Rafraîchir la liste
      const updated = await axios.get("http://localhost:5000/api/tournois");
      setTournois(updated.data);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  return (
    <div className="tournois-actifs">
      <h1>Tournois Actifs</h1>
      <select onChange={e => setFiltre(e.target.value)}>
        <option value="Tous">Tous</option>
        <option value="Solo">Solo</option>
        <option value="Duo">Duo</option>
        <option value="Squad">Squad</option>
      </select>
      {message && <div style={{ color: "#FFB300", margin: "1rem 0" }}>{message}</div>}
      <div className="tournoi-list">
        {tournois
          .filter(t => filtre === "Tous" || t.mode === filtre)
          .map(tournoi => (
            <div className="tournoi-card" key={tournoi.id}>
              <h2>{tournoi.nom}</h2>
              <p>Date : {tournoi.date}</p>
              <p>Heure : {tournoi.heure}</p>
              <p>Prix : {tournoi.prix} 💰</p>
              <p>Places restantes : {tournoi.placesRestantes}</p>
              <button
                style={{ background: "#FFB300", color: "#181A20" }}
                disabled={tournoi.placesRestantes === 0}
                onClick={() => handleInscription(tournoi.id)}
              >
                {tournoi.placesRestantes === 0 ? "Complet" : "S'inscrire"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TournoisActifs;
