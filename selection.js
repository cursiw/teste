// src/components/TournamentBracket.jsx
import React, { useState } from 'react';

const Bracket = () => {
  const [activeRound, setActiveRound] = useState(1);

  const rounds = [
    { id: 1, name: "8èmes de Finale", matches: [{id: 101, t1: "Dragons", t2: "Kings", score: "2-0"}, {id: 102, t1: "Snipers", t2: "Titans", score: "1-2"}] },
    { id: 2, name: "Quarts", matches: [{id: 201, t1: "Dragons", t2: "Titans", score: "pending"}] },
    { id: 3, name: "Demi-Finale", matches: [] },
  ];

  return (
    <div className="bg-ff_card p-4 rounded-xl">
      {/* Sélecteur de Round */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {rounds.map(round => (
          <button 
            key={round.id}
            onClick={() => setActiveRound(round.id)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition ${activeRound === round.id ? 'bg-ff_red text-white' : 'bg-gray-800 text-gray-400'}`}
          >
            {round.name}
          </button>
        ))}
      </div>

      {/* Liste des matchs du round sélectionné */}
      <div className="space-y-4">
        {rounds.find(r => r.id === activeRound).matches.map(match => (
          <div key={match.id} className="bg-ff_black border-l-4 border-ff_orange p-4 rounded flex justify-between items-center">
            <div className="flex flex-col space-y-2 w-full">
              <div className="flex justify-between items-center">
                <span className="font-teko text-xl">{match.t1}</span>
                <span className="text-ff_red font-bold">{match.score !== "pending" ? match.score.split('-')[0] : '-'}</span>
              </div>
              <div className="border-t border-gray-800 my-1"></div>
              <div className="flex justify-between items-center">
                <span className="font-teko text-xl">{match.t2}</span>
                <span className="text-ff_red font-bold">{match.score !== "pending" ? match.score.split('-')[1] : '-'}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
