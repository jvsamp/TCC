import { useState, useEffect } from 'react';
import { Bell, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Notificacoes() {
  const [notificacoes, setNotificacoes] = useState<any[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (usuarioId) {
      fetch(`http://localhost:5000/api/notificacoes/${usuarioId}`)
        .then(res => res.json())
        .then(data => {
          if (data.sucesso) setNotificacoes(data.dados);
          setCarregando(false);
        })
        .catch(erro => {
          console.error("Erro ao carregar notificações", erro);
          setCarregando(false);
        });
    } else {
      setCarregando(false);
    }
  }, []);

  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-4xl mx-auto pb-20">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800">Notificações e Alertas</h1>
        <p className="text-slate-500 mt-2">Avisos e lembretes importantes sincronizados com a sua caderneta.</p>
      </div>

      {carregando ? (
        <div className="text-center py-16 text-slate-400 font-bold">Carregando notificações...</div>
      ) : (
        <div className="space-y-4">
          {notificacoes.length > 0 ? (
            notificacoes.map((notif) => (
              <div 
                key={notif.id} 
                className={`p-6 rounded-2xl border transition-all flex items-start gap-4 ${
                  notif.lida 
                    ? 'bg-white border-slate-200 text-slate-600' 
                    : 'bg-teal-50/50 border-teal-200 text-slate-800 shadow-sm'
                }`}
              >
                <div className={`p-3 rounded-xl shrink-0 ${notif.lida ? 'bg-slate-100 text-slate-500' : 'bg-teal-600 text-white'}`}>
                  {notif.lida ? <CheckCircle2 size={20} /> : <Bell size={20} />}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{notif.titulo}</h3>
                  <p className="text-sm leading-relaxed">{notif.mensagem}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-slate-400 font-bold">Nenhuma nova notificação no momento.</div>
          )}
        </div>
      )}
    </div>
  );
}