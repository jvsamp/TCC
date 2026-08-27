import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export default function Campanhas() {
  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-5xl mx-auto pb-20">
      
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800">Campanhas de Vacinação</h1>
        <p className="text-slate-500 mt-2">
          Fique por dentro dos calendários oficiais de imunização ativa na sua região.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Campanha 1 */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
          <div className="h-40 bg-gradient-to-r from-emerald-600 to-teal-600 p-6 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
              <Calendar size={140} />
            </div>
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-max">
              Em Andamento
            </span>
            <h2 className="text-2xl font-black">Campanha Nacional de Vacinação contra a Gripe (Influenza)</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Direcionada ao público-alvo prioritário e aberta para atualização geral da população nos postos de saúde municipais.
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>📅 Período: Até 30/09/2026</span>
              <span className="text-teal-600 flex items-center gap-1">Saiba mais <ArrowUpRight size={14} /></span>
            </div>
          </div>
        </div>

        {/* Campanha 2 */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col justify-between">
          <div className="h-40 bg-gradient-to-r from-teal-600 to-cyan-600 p-6 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute right-[-20px] bottom-[-20px] opacity-10">
              <Calendar size={140} />
            </div>
            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold w-max">
              Permanente
            </span>
            <h2 className="text-2xl font-black">Atualização da Caderneta de Adolescentes e Adultos</h2>
          </div>
          <div className="p-6 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed">
              Verificação de doses em atraso para vacinas como Tríplice Viral, Hepatite B, Febre Amarela e dT (Dupla Adulto).
            </p>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
              <span>📅 Período: Contínuo (Todo o ano)</span>
              <span className="text-teal-600 flex items-center gap-1">Saiba mais <ArrowUpRight size={14} /></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}