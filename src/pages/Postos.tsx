import { useState, useEffect } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Postos() {
  const [postos, setPostos] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/postos')
      .then((res) => res.json())
      .then((data) => {
        if (data.sucesso) setPostos(data.dados);
        setCarregando(false);
      });
  }, []);

  if (carregando) return <div className="p-12 text-center font-bold text-slate-400">Carregando postos...</div>;

  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-5xl mx-auto pb-20">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800">Postos de Saúde e UBS</h1>
        <p className="text-slate-500 mt-2">Unidades de atendimento cadastradas no sistema municipal.</p>
      </div>

      <div className="space-y-6">
        {postos.map((posto) => (
          <div key={posto.id} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-3">
              <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                {posto.aberto ? 'Aberto Agora' : 'Fechado'}
              </span>
              <h2 className="text-xl font-bold text-slate-800">{posto.nome}</h2>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                <MapPin size={16} className="text-teal-600 shrink-0" /> {posto.endereco}
              </p>
              <p className="text-slate-500 text-sm flex items-center gap-2">
                <Clock size={16} className="text-teal-600 shrink-0" /> {posto.horario}
              </p>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 text-slate-600 text-sm font-bold">
              <Phone size={16} className="text-teal-600" /> {posto.telefone}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}