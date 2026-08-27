import { MapPin, Phone, Clock } from 'lucide-react';

export default function Postos() {
  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-5xl mx-auto pb-20">
      
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800">Postos de Saúde e UBS</h1>
        <p className="text-slate-500 mt-2">
          Encontre os locais de atendimento mais próximos para aplicação de vacinas em Saquarema - RJ.
        </p>
      </div>

      <div className="space-y-6">
        
        {/* Posto 1 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
              Aberto Agora
            </span>
            <h2 className="text-xl font-bold text-slate-800">UBS Centro - Saquarema</h2>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <MapPin size={16} className="text-teal-600 shrink-0" /> Rua Coronel Madureira, 77 - Centro, Saquarema - RJ
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <Clock size={16} className="text-teal-600 shrink-0" /> Seg a Sex: 08:00 às 17:00
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 text-slate-600 text-sm font-bold">
            <Phone size={16} className="text-teal-600" /> (22) 2651-0000
          </div>
        </div>

        {/* Posto 2 */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
              Aberto Agora
            </span>
            <h2 className="text-xl font-bold text-slate-800">UBS Bacaxá</h2>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <MapPin size={16} className="text-teal-600 shrink-0" /> Rodovia Amaral Peixoto, Km 53 - Bacaxá, Saquarema - RJ
            </p>
            <p className="text-slate-500 text-sm flex items-center gap-2">
              <Clock size={16} className="text-teal-600 shrink-0" /> Seg a Sex: 08:00 às 16:30
            </p>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-100 text-slate-600 text-sm font-bold">
            <Phone size={16} className="text-teal-600" /> (22) 2653-1122
          </div>
        </div>

      </div>
    </div>
  );
}