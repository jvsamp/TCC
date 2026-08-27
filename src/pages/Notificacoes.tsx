import { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

export default function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/notificacoes')
      .then(res => res.json())
      .then(data => {
        if (data.sucesso) setNotificacoes(data.dados);
      });
  }, []);
  
  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-5xl mx-auto pb-20">
      <div className="mb-8 border-b border-slate-200 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Notificações</h1>
          <p className="text-slate-500 mt-2">Alertas e avisos oficiais sincronizados com o servidor.</p>
        </div>
      </div>

      <div className="space-y-4">
        {notificacoes.map((notif) => (
          <div key={notif.id} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4 hover:border-teal-300 transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0">
              <Bell size={24} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-slate-800 text-lg">{notif.titulo}</h3>
                <span className="text-xs text-slate-400 font-medium">{notif.data}</span>
              </div>
              <p className="text-slate-600 mt-1 text-sm leading-relaxed">{notif.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}