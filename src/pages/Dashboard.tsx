import { ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in relative overflow-hidden">
      
      {/* Círculos decorativos de fundo suaves */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="bg-gradient-to-br from-emerald-100 to-teal-50 w-24 h-24 rounded-[2rem] flex items-center justify-center mb-8 shadow-sm rotate-3">
        <ShieldCheck size={48} className="text-teal-600 -rotate-3" strokeWidth={2} />
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4 tracking-tight">
        Bem-vindo ao <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500">EasyVacc</span>
      </h1>
      
      <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-lg font-medium">
        Cuidar da sua saúde nunca foi tão fácil. Utilize o menu lateral para acessar seus serviços.
      </p>

      {/* Caixa de Informação com design 'Glass' */}
      <div className="bg-white/70 backdrop-blur-xl border border-white shadow-xl shadow-teal-900/5 rounded-[2rem] p-8 md:p-10 max-w-2xl text-left relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-cyan-500"></div>
        
        <h2 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-3">
          <span className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">i</span>
          Por onde começar?
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg font-medium">
          Clique em <strong className="font-black text-teal-700">Minhas Vacinas</strong> no menu lateral para visualizar seu histórico, em <strong className="font-black text-teal-700">Emitir Certificado</strong> para gerar seu comprovante PDF, ou acesse <strong className="font-black text-teal-700">Meu Perfil</strong> para conferir seus dados.
        </p>
      </div>

    </div>
  );
}