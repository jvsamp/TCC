import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, HeartPulse, Smartphone } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans flex flex-col">
      
      {/* Navbar Transparente */}
      <header className="absolute top-0 w-full p-6 flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Logo EasyVacc" 
            className="w-12 h-12 object-contain bg-white rounded-full p-1 shadow-md"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/48?text=eV'; }}
          />
          <span className="text-2xl font-black text-white tracking-tight drop-shadow-md">EasyVacc</span>
        </div>
      </header>

      {/* Hero Section (A área principal vibrante) */}
      <main className="relative bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-500 pt-32 pb-40 px-6 flex flex-col items-center justify-center text-center overflow-hidden flex-1">
        
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl"></div>

        <span className="text-teal-50 font-bold tracking-widest uppercase mb-4 text-sm drop-shadow-sm animate-fade-in">
          O Futuro da Saúde Pública
        </span>
        
        <h1 className="text-5xl md:text-7xl font-black text-white max-w-4xl leading-tight drop-shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Mais que uma caderneta, <br/> a proteção é <span className="text-emerald-200">digital.</span>
        </h1>
        
        <p className="mt-8 text-lg md:text-xl text-teal-50 max-w-2xl drop-shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Tenha todo o seu histórico de imunização na palma da mão. Simples, seguro e integrado com o sistema nacional de saúde.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Link 
            to="/login"
            className="bg-white text-teal-700 px-8 py-4 rounded-full font-black text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all flex items-center justify-center gap-2"
          >
            Acessar minha Caderneta <ArrowRight size={20} />
          </Link>
        </div>

        {/* Onda decorativa (Wave) usando SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,123.15,192.27,112.5,237.45,104.75,282.8,80.83,321.39,56.44Z" className="fill-white"></path>
          </svg>
        </div>
      </main>

      {/* Seção de Vantagens (Rodapé da Vitrine) */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Dados Seguros</h3>
            <p className="text-slate-500">Suas informações protegidas com criptografia de ponta e validação oficial.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <HeartPulse size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Saúde em Dia</h3>
            <p className="text-slate-500">Receba alertas de vacinas pendentes e não perca nenhuma dose de reforço.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Acesso Rápido</h3>
            <p className="text-slate-500">Gere seu certificado nacional em PDF com um clique, direto do celular.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}