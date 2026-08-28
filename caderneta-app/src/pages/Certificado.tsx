import { useState, useEffect } from 'react';
import { Download, FileCheck, QrCode } from 'lucide-react';

interface Vacina {
  id: number;
  nome: string;
  dataAplicacao: string;
  lote: string;
  fabricante: string;
  proximaDose: string;
}

export default function Certificado() {
  const [usuario, setUsuario] = useState<any>({ nome: 'Carregando...', cpf: 'Carregando...' });
  const [vacinas, setVacinas] = useState<Vacina[]>([]);
  const [carregando, setCarregando] = useState(true);

  // Pega a data e hora real do momento que a tela abriu
  const dataEmissao = new Date().toLocaleString('pt-BR');

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    if (usuarioId) {
      // 1. Busca os dados do cidadão
      fetch(`http://localhost:5000/api/usuarios/${usuarioId}`)
        .then(res => res.json())
        .then(data => {
          if (data.sucesso) setUsuario(data.dados);
        });

      // 2. Busca o histórico de vacinas
      fetch(`http://localhost:5000/api/vacinas/${usuarioId}`)
        .then(res => res.json())
        .then(data => {
          if (data.sucesso) setVacinas(data.dados);
          setCarregando(false);
        })
        .catch(() => setCarregando(false));
    } else {
      setCarregando(false);
    }
  }, []);

  const gerarPDF = () => {
    window.print();
  };

  if (carregando) {
    return <div className="p-8 text-center text-slate-500 font-bold">Gerando documento oficial...</div>;
  }

  return (
    <div className="p-8 animate-fade-in max-w-4xl mx-auto pb-20 print:p-0 print:pb-0">
      
      {/* Cabeçalho que esconde na impressão */}
      <div className="mb-8 border-b border-slate-200 pb-4 flex justify-between items-end print:hidden">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Emitir Certificado</h1>
          <p className="text-slate-500 mt-2">
            Gere um comprovante oficial em PDF das suas vacinas aplicadas.
          </p>
        </div>
        
        <button 
          onClick={gerarPDF}
          className="bg-teal-600 text-white font-bold py-3 px-6 rounded-xl shadow-md hover:bg-teal-700 active:scale-95 transition-all flex items-center gap-2"
        >
          <Download size={20} />
          <span>Baixar PDF</span>
        </button>
      </div>

      {/* ÁREA DO CERTIFICADO OFICIAL */}
      <div className="bg-white p-10 border border-slate-200 shadow-sm rounded-lg print:border-none print:shadow-none print:p-0">
        
        {/* Topo do Certificado */}
        <div className="flex justify-between items-center border-b-2 border-teal-600 pb-6 mb-6">
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
            <h3 className="text-lg font-bold text-teal-600 uppercase">Certificado Nacional</h3>
            <p className="text-xs text-slate-500">Válido em todo o território</p>
          </div>
        </div>

        {/* Dados do Cidadão (Vindos do Banco) */}
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 mb-8 print:bg-white print:border-slate-300">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Dados do Cidadão</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-500">Nome Completo</p>
              <p className="font-bold text-slate-800">{usuario.nome}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">CPF</p>
              <p className="font-bold text-slate-800">{usuario.cpf}</p>
            </div>
          </div>
        </div>

        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
          Registro de Doses Aplicadas
        </h4>
        
        {/* Lista de Vacinas (Vindas do Banco) */}
        <div className="space-y-4 mb-10 min-h-[150px]">
          {vacinas.length > 0 ? (
            vacinas.map((vacina) => (
              <div key={vacina.id} className="flex justify-between items-center py-2 border-b border-slate-100 border-dashed">
                <div>
                  <p className="font-bold text-slate-800">{vacina.nome}</p>
                  <p className="text-xs text-slate-500">Fabricante: {vacina.fabricante || 'Não especificado'}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-800">{vacina.dataAplicacao}</p>
                  <p className="text-xs text-slate-500">Lote: {vacina.lote || '-'}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-400 text-sm italic">Nenhum registro de vacinação encontrado na base de dados.</p>
          )}
        </div>

        {/* Rodapé do Certificado */}
        <div className="flex justify-between items-end pt-8 border-t-2 border-teal-600">
          <div>
            <p className="text-xs text-slate-500 mb-1">Documento emitido eletronicamente via Portal EasyVacc.</p>
            <p className="text-xs text-slate-500">Data de emissão: {dataEmissao}</p>
            <div className="flex items-center gap-1 text-emerald-600 mt-2 font-bold text-sm">
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