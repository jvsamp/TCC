import { Link, Outlet } from 'react-router-dom';
// Adicionamos o PlusCircle para o botão de adicionar
import { Home, ShieldCheck, FileText, User, LogOut, PlusCircle } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800">
      
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col print:hidden">
        
        <div className="p-6 flex justify-center border-b border-slate-100">
          <img 
            src="/logo.png" 
            alt="Logo EasyVacc" 
            className="w-24 h-24 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/96?text=eV'; }}
          />
        </div>

        {/* Adicionamos overflow-y-auto aqui para caso a lista de filhos cresça, o menu tenha rolagem */}
        <nav className="flex-1 p-4 overflow-y-auto">
          
          <div className="space-y-2">
            <p className="text-xs font-bold text-slate-400 mb-4 px-2 tracking-wider">MINHA CADERNETA</p>
            
            <Link to="/dashboard" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium">
              <Home size={20} />
              <span>Início</span>
            </Link>
            <Link to="/historico" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium">
              <ShieldCheck size={20} />
              <span>Minhas Vacinas</span>
            </Link>
            <Link to="/certificado" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium">
              <FileText size={20} />
              <span>Emitir Certificado</span>
            </Link>
            <Link to="/perfil" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium">
              <User size={20} />
              <span>Meu Perfil</span>
            </Link>
          </div>

          {/* NOVA SEÇÃO: DEPENDENTES */}
          <div className="mt-8 space-y-2">
            <p className="text-xs font-bold text-slate-400 mb-4 px-2 tracking-wider">MEUS DEPENDENTES</p>
            
            {/* Exemplo de um filho já cadastrado (Mock) */}
            <Link to="#" className="flex items-center gap-3 px-4 py-2 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors font-medium">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                L
              </div>
              <div className="flex flex-col">
                <span className="text-sm">Lucas Sampaio</span>
                <span className="text-[10px] text-slate-400">Filho(a)</span>
              </div>
            </Link>

            {/* Botão de Adicionar Nova Pessoa */}
            <Link to="/adicionar-dependente" className="flex items-center gap-3 px-4 py-3 mt-2 text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-colors font-medium border border-dashed border-slate-300 hover:border-emerald-300">
              <PlusCircle size={18} />
              <span className="text-sm">Adicionar pessoa</span>
            </Link>
          </div>

        </nav>

        <div className="p-4 border-t border-slate-100">
          <Link to="/" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-colors font-medium">
            <LogOut size={20} />
            <span>Sair da Conta</span>
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto relative print:overflow-visible print:bg-white">
        <Outlet /> 
      </main>

    </div>
  );
}