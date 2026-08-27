import { Bell, ShieldCheck, Calendar, CheckCircle } from 'lucide-react';

export default function Notificacoes() {
  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-5xl mx-auto pb-20">
      
      <div className="mb-8 border-b border-slate-200 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Notificações</h1>
          <p className="text-slate-500 mt-2">
            Acompanhe alertas de doses, reforços pendentes e avisos do sistema de saúde.
          </p>
        </div>
        <span className="bg-teal-100 text-teal-800 text-xs font-bold px-3 py-1.5 rounded-full">
          2 não lidas
        </span>
      </div>

      <div className="space-y-4">
        
        {/* Notificação 1 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4 hover:border-teal-300 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
          <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0">
            <ShieldCheck size={24} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-slate-800 text-lg">Campanha Anual de Atualização Cadastral</h3>
              <span className="text-xs text-slate-400 font-medium">Hoje, 08:30</span>
            </div>
            <p className="text-slate-600 mt-1 text-sm leading-relaxed">
              Seus dados de endereço em Saquarema foram verificados e validados com sucesso através da base do Gov.br.
            </p>
          </div>
        </div>

        {/* Notificação 2 */}
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex items-start gap-4 hover:border-teal-300 transition-all relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
            <Calendar size={24} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-slate-800 text-lg">Próxima Dose de Reforço Disponível</h3>
              <span className="text-xs text-slate-400 font-medium">Ontem</span>
            </div>
            <p className="text-slate-600 mt-1 text-sm leading-relaxed">
              O imunizante anual contra a Influenza já está disponível nos postos de atendimento credenciados do município.
            </p>
          </div>
        </div>

        {/* Notificação Lida */}
        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex items-start gap-4 opacity-75">
          <div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-2xl flex items-center justify-center shrink-0">
            <CheckCircle size={24} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-bold text-slate-800 text-lg">Certificado Digital Gerado com Sucesso</h3>
              <span className="text-xs text-slate-400 font-medium">15 de Mai</span>
            </div>
            <p className="text-slate-600 mt-1 text-sm leading-relaxed">
              Seu comprovante nacional de vacinação em formato PDF foi emitido e validado digitalmente.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}