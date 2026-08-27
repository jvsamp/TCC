import { Link, Outlet } from 'react-router-dom';
import { Home, ShieldCheck, FileText, User, LogOut, PlusCircle } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex h-screen bg-slate-50/50 font-sans text-slate-800">
      
      {/* Sidebar com sombra suave em vez de borda dura */}
      <aside className="w-72 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] flex flex-col print:hidden z-10">
        
        <div className="p-8 flex justify-center border-b border-slate-50">
          <img 
            src="/logo.png" 
            alt="Logo EasyVacc" 
            className="w-24 h-24 object-contain transition-transform hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/96?text=eV'; }}
          />
        </div>

        <nav className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-400 mb-4 px-2 tracking-widest uppercase">Minha Caderneta</p>
            
            {/* Links com o novo tom de Teal/Emerald */}
            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3.5 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold">
              <Home size={20} strokeWidth={2.5} /> <span>Início</span>
            </Link>
            <Link to="/historico" className="flex items-center gap-3 px-4 py-3.5 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold">
              <ShieldCheck size={20} strokeWidth={2.5} /> <span>Minhas Vacinas</span>
            </Link>
            <Link to="/certificado" className="flex items-center gap-3 px-4 py-3.5 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold">
              <FileText size={20} strokeWidth={2.5} /> <span>Emitir Certificado</span>
            </Link>
            <Link to="/perfil" className="flex items-center gap-3 px-4 py-3.5 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold">
              <User size={20} strokeWidth={2.5} /> <span>Meu Perfil</span>
            </Link>
          </div>

          <div className="mt-10 space-y-1">
            <p className="text-[10px] font-black text-slate-400 mb-4 px-2 tracking-widest uppercase">Meus Dependentes</p>
            
            <Link to="#" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-2xl transition-all font-bold">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center text-xs font-black shadow-md">
                L
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Lucas Sampaio</span>
                <span className="text-[10px] text-slate-400 font-semibold">Filho(a)</span>
              </div>
            </Link>

            <Link to="/adicionar-dependente" className="flex items-center gap-3 px-4 py-3.5 mt-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-2xl transition-all font-bold border-2 border-dashed border-slate-200 hover:border-slate-300">
              <PlusCircle size={20} strokeWidth={2.5} />
              <span className="text-sm">Adicionar pessoa</span>
            </Link>
          </div>
        </nav>

        <div className="p-6">
          <Link to="/" className="flex items-center gap-3 px-4 py-4 text-slate-400 hover:bg-red-50 hover:text-red-500 rounded-2xl transition-all font-bold">
            <LogOut size={20} strokeWidth={2.5} /> <span>Sair da Conta</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto relative print:overflow-visible print:bg-white bg-[#F8FAFC]">
        <Outlet /> 
      </main>

    </div>
  );
}