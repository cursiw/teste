// src/components/PlayerDashboard.jsx
const StatCard = ({ label, value, color }) => (
  <div className="bg-ff_card p-4 rounded-lg border border-gray-800">
    <p className="text-gray-400 text-xs uppercase tracking-widest">{label}</p>
    <p className={`text-3xl font-teko font-bold ${color}`}>{value}</p>
  </div>
);

const PlayerDashboard = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 rounded-full border-2 border-ff_red p-1">
          <img src="avatar_url" className="rounded-full bg-gray-700 h-full w-full" alt="Avatar" />
        </div>
        <div>
          <h2 className="text-3xl font-teko uppercase">ProPlayer_Garena</h2>
          <p className="text-ff_orange text-sm font-bold italic">Rang : Maître</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Tournois Joués" value="24" color="text-white" />
        <StatCard label="Victoires (Booyah)" value="12" color="text-ff_gold" />
        <StatCard label="Ratio K/D" value="4.25" color="text-ff_red" />
        <StatCard label="Gains Totaux" value="45.000 FCFA" color="text-green-500" />
      </div>

      <h3 className="text-xl font-teko uppercase mb-4">Historique Récent</h3>
      <div className="bg-ff_card rounded-lg divide-y divide-gray-800">
        {[1, 2, 3].map(match => (
          <div key={match} className="p-4 flex justify-between items-center">
            <span className="text-gray-300">Squad Pro League - Round 2</span>
            <span className="text-green-500 font-bold">Gagné</span>
          </div>
        ))}
      </div>
    </div>
  );
};
