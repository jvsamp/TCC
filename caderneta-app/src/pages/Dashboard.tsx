import { ShieldCheck, FileText, User, PlusCircle, CheckCircle2, ArrowUpRight, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-7xl mx-auto pb-20">
      
      {/* Cabeçalho de Boas-Vindas com Banner Moderno */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl shadow-teal-900/10 relative overflow-hidden mb-10">
        
        {/* Detalhes decorativos de fundo */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute left-1/3 top-0 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-4 border border-white/20">
              <Activity size={14} /> Sistema Integrado SUS
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              Olá, João Victor 👋
            </h1>
            <p className="text-teal-50 mt-2 text-sm md:text-base font-medium max-w-xl">
              Sua caderneta de vacinação está atualizada. Gerencie suas doses, emita certificados ou visualize seus dependentes por aqui.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-4 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 bg-white text-teal-600 rounded-xl flex items-center justify-center font-black shadow-sm">
              <ShieldCheck size={28} />
            </div>
            <div>
              <p className="text-xs text-teal-100 font-bold uppercase tracking-wider">Status Geral</p>
              <p className="text-sm font-black text-white">Protegido (100%)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Atalhos / Funcionalidades */}
      <h2 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
        Acesso Rápido
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Card 1: Minhas Vacinas */}
        <Link 
          to="/historico" 
          className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-900/5 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-600 transition-colors">Minhas Vacinas</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Consulte seu histórico completo de imunização, datas de aplicação e próximas doses.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-teal-600 font-bold text-sm">
            <span>Acessar histórico</span> <ArrowUpRight size={16} />
          </div>
        </Link>

        {/* Card 2: Emitir Certificado */}
        <Link 
          to="/certificado" 
          className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-900/5 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">Certificado Nacional</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Gere seu comprovante oficial de vacinação em PDF com QR Code de validação.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-emerald-600 font-bold text-sm">
            <span>Emitir PDF</span> <ArrowUpRight size={16} />
          </div>
        </Link>

        {/* Card 3: Meu Perfil */}
        <Link 
          to="/perfil" 
          className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-teal-500 hover:shadow-xl hover:shadow-teal-900/5 transition-all group flex flex-col justify-between"
        >
          <div>
            <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <User size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-cyan-600 transition-colors">Meu Perfil e Dados</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Visualize suas informações cadastrais, endereço, tipo sanguíneo e contato de emergência.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-1 text-cyan-600 font-bold text-sm">
            <span>Gerenciar dados</span> <ArrowUpRight size={16} />
          </div>
        </Link>

      </div>

      {/* Seção Inferior: Rodapé Informativo */}
      <div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
            <CheckCircle2 size={20} />
          </div>
          <p className="text-sm text-slate-600 font-medium">
            Precisa cadastrar um dependente (filho ou familiar)? Utilize o botão no menu lateral esquerdo.
          </p>
        </div>
        <Link 
          to="/adicionar-dependente" 
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-5 py-3 rounded-xl transition-colors flex items-center gap-2 shrink-0"
        >
          <PlusCircle size={16} /> Adicionar Dependente
        </Link>
      </div>

    </div>
  );
}