import { Download, FileCheck, QrCode } from 'lucide-react';

export default function Certificado() {
  
  // Função nativa, super rápida e que não trava o PC!
  const gerarPDF = () => {
    window.print();
  };

  return (
    <div className="p-8 animate-fade-in max-w-4xl mx-auto pb-20 print:p-0 print:pb-0">
      
      {/* Adicionamos 'print:hidden' aqui para os textos de cima não saírem no PDF */}
      <div className="mb-8 border-b border-slate-200 pb-4 flex justify-between items-end print:hidden">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Emitir Certificado</h1>
          <p className="text-slate-500 mt-2">
            Gere um comprovante oficial em PDF das suas vacinas aplicadas.
          </p>
        </div>
        
        <button 
          onClick={gerarPDF}
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2"
        >
          <Download size={20} />
          <span>Baixar PDF</span>
        </button>
      </div>

      {/* ÁREA DO CERTIFICADO OFICIAL */}
      <div className="bg-white p-10 border border-slate-200 shadow-sm rounded-lg print:border-none print:shadow-none print:p-0">
        <div className="flex justify-between items-center border-b-2 border-blue-600 pb-6 mb-6">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Logo EasyVacc" 
              className="w-16 h-16 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64?text=eV'; }}
            />
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">EasyVacc</h2>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Sistema de Imunização</p>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-lg font-bold text-blue-600 uppercase">Certificado Nacional</h3>
            <p className="text-xs text-slate-500">Válido em todo o território</p>
          </div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-8 print:bg-white print:border-slate-300">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Dados do Cidadão</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-500">Nome Completo</p>
              <p className="font-bold text-slate-800">João Victor Sampaio</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">CPF</p>
              <p className="font-bold text-slate-800">123.456.789-00</p>
            </div>
          </div>
        </div>

        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
          Registro de Doses Aplicadas
        </h4>
        
        <div className="space-y-4 mb-10">
          <div className="flex justify-between items-center py-2 border-b border-slate-100 border-dashed">
            <div>
              <p className="font-bold text-slate-800">Febre Amarela</p>
              <p className="text-xs text-slate-500">Dose Única</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-800">10 Fev 2024</p>
              <p className="text-xs text-slate-500">Lote: FA2023-X9</p>
            </div>
          </div>

          <div className="flex justify-between items-center py-2 border-b border-slate-100 border-dashed">
            <div>
              <p className="font-bold text-slate-800">Covid-19 (Bivalente)</p>
              <p className="text-xs text-slate-500">Dose de Reforço</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-800">05 Nov 2023</p>
              <p className="text-xs text-slate-500">Lote: CV-90812</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end pt-8 border-t-2 border-blue-600">
          <div>
            <p className="text-xs text-slate-500 mb-1">Documento emitido eletronicamente via Portal EasyVacc.</p>
            <p className="text-xs text-slate-500">Data de emissão: 21/08/2026 - 15:30</p>
            <div className="flex items-center gap-1 text-green-600 mt-2 font-bold text-sm">
              <FileCheck size={16} /> Assinatura Digital Verificada
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-slate-100 border border-slate-300 rounded-lg flex items-center justify-center text-slate-400 mb-1">
               <QrCode size={40} />
            </div>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">QR Code Auth</span>
          </div>
        </div>

      </div>
    </div>
  );
}