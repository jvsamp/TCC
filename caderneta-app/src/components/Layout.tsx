import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Home, ShieldCheck, FileText, User, LogOut, PlusCircle, Bell, Calendar, MapPin, Menu, X } from 'lucide-react';

export default function Layout() {
  const [isOpen, setIsOpen] = useState(true);
  const [dependentes, setDependentes] = useState<any[]>([]);
  const [notificacoesNaoLidas, setNotificacoesNaoLidas] = useState(0);

  // Buscar dependentes e notificações dinamicamente
  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (usuarioId) {
      // Puxar Dependentes
      fetch(`http://localhost:5000/api/dependentes/${usuarioId}`)
        .then(res => res.json())
        .then(data => {
          if (data.sucesso) setDependentes(data.dados);
        })
        .catch(err => console.error("Erro ao buscar dependentes:", err));

      // Puxar Notificações (contar apenas as não lidas)
      fetch(`http://localhost:5000/api/notificacoes/${usuarioId}`)
        .then(res => res.json())
        .then(data => {
          if (data.sucesso) {
            const qtdNaoLidas = data.dados.filter((notif: any) => notif.lida === false).length;
            setNotificacoesNaoLidas(qtdNaoLidas);
          }
        })
        .catch(err => console.error("Erro ao buscar notificações:", err));
    }
  }, []);

  return (
    <div className="flex h-screen bg-slate-50/50 font-sans text-slate-800 overflow-hidden">
      
      <aside className={`bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col print:hidden z-10 transition-all duration-300 ease-in-out ${isOpen ? 'w-72' : 'w-24'}`}>
        
        <div className="p-6 flex items-center justify-between border-b border-slate-50">
          {isOpen && (
            <div className="flex items-center gap-2 overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Logo EasyVacc" 
                className="w-10 h-10 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/40?text=eV'; }}
              />
              <span className="font-black text-slate-800 text-lg tracking-tight">EasyVacc</span>
            </div>
          )}
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="w-10 h-10 rounded-xl bg-slate-50 text-slate-500 hover:bg-teal-50 hover:text-teal-600 flex items-center justify-center transition-colors mx-auto"
            title={isOpen ? "Recolher menu" : "Expandir menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto space-y-6 overflow-x-hidden">
          
          {/* Bloco 1: Principal */}
          <div className="space-y-1">
            {isOpen && <p className="text-[10px] font-black text-slate-400 mb-2 px-3 tracking-widest uppercase">Caderneta</p>}
            
            <Link to="/dashboard" title="Início" className={`flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
              <Home size={20} strokeWidth={2.5} className="shrink-0" /> 
              {isOpen && <span className="text-sm truncate">Início</span>}
            </Link>
            
            <Link to="/historico" title="Minhas Vacinas" className={`flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
              <ShieldCheck size={20} strokeWidth={2.5} className="shrink-0" /> 
              {isOpen && <span className="text-sm truncate">Minhas Vacinas</span>}
            </Link>

            <Link to="/certificado" title="Emitir Certificado" className={`flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
              <FileText size={20} strokeWidth={2.5} className="shrink-0" /> 
              {isOpen && <span className="text-sm truncate">Emitir Certificado</span>}
            </Link>

            <Link to="/perfil" title="Meu Perfil" className={`flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
              <User size={20} strokeWidth={2.5} className="shrink-0" /> 
              {isOpen && <span className="text-sm truncate">Meu Perfil</span>}
            </Link>
          </div>

          {/* Bloco 2: Serviços e Saúde */}
          <div className="space-y-1">
            {isOpen && <p className="text-[10px] font-black text-slate-400 mb-2 px-3 tracking-widest uppercase">Serviços</p>}
            
            <Link to="/notificacoes" title="Notificações" className={`flex items-center justify-between px-4 py-3 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
              <div className="flex items-center gap-3">
                <Bell size={20} strokeWidth={2.5} className="shrink-0" /> 
                {isOpen && <span className="text-sm truncate">Notificações</span>}
              </div>
              {/* O número de notificações só aparece se houver alertas não lidos */}
              {isOpen && notificacoesNaoLidas > 0 && (
                <span className="bg-teal-100 text-teal-700 text-[10px] px-2 py-0.5 rounded-full font-black">
                  {notificacoesNaoLidas}
                </span>
              )}
            </Link>

            <Link to="/campanhas" title="Campanhas" className={`flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
              <Calendar size={20} strokeWidth={2.5} className="shrink-0" /> 
              {isOpen && <span className="text-sm truncate">Campanhas</span>}
            </Link>

            <Link to="/postos" title="Postos de Saúde" className={`flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
              <MapPin size={20} strokeWidth={2.5} className="shrink-0" /> 
              {isOpen && <span className="text-sm truncate">Postos de Saúde</span>}
            </Link>
          </div>

          {/* Bloco 3: Dependentes Dinâmicos */}
          <div className="space-y-1">
            {isOpen && <p className="text-[10px] font-black text-slate-400 mb-2 px-3 tracking-widest uppercase">Dependentes</p>}
            
            {dependentes.length > 0 ? (
              dependentes.map((dep) => (
                <div key={dep.id} className={`flex items-center gap-3 px-4 py-2.5 text-slate-600 bg-teal-50/50 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center text-xs font-black shadow-md shrink-0">
                    {dep.nome.charAt(0).toUpperCase()}
                  </div>
                  {isOpen && (
                    <div className="flex flex-col truncate">
                      <span className="text-sm truncate text-slate-800">{dep.nome}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">{dep.parentesco}</span>
                    </div>
                  )}
                </div>
              ))
            ) : (
              isOpen && <p className="text-xs text-slate-400 px-3 italic">Nenhum dependente.</p>
            )}

            <Link to="/adicionar-dependente" title="Adicionar pessoa" className={`flex items-center gap-3 px-4 py-3 mt-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-2xl transition-all font-bold border-2 border-dashed border-slate-200 hover:border-slate-300 ${!isOpen && 'justify-center px-0 border-none'}`}>
              <PlusCircle size={20} strokeWidth={2.5} className="shrink-0" />
              {isOpen && <span className="text-sm truncate">Adicionar pessoa</span>}
            </Link>
          </div>
        </nav>

        {/* Rodapé da Sidebar (Sair) */}
        <div className="p-4 border-t border-slate-50">
          <Link to="/" title="Sair da Conta" className={`flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-red-50 hover:text-red-500 rounded-2xl transition-all font-bold ${!isOpen && 'justify-center px-0'}`}>
            <LogOut size={20} strokeWidth={2.5} className="shrink-0" /> 
            {isOpen && <span className="text-sm truncate">Sair da Conta</span>}
          </Link>
        </div>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 overflow-y-auto relative print:overflow-visible print:bg-white bg-[#F8FAFC]">
        <Outlet /> 
      </main>

    </div>
  );
}