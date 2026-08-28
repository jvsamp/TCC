import { useState, useEffect } from 'react';
import { ShieldCheck, Search, Filter, Calendar, CheckCircle2, Clock } from 'lucide-react';

// Interface ATUALIZADA para espelhar exatamente o modelo do Sequelize
interface Vacina {
  id: number;
  nome: string;
  dataAplicacao: string;
  lote: string;
  fabricante: string;
  proximaDose: string;
}

export default function Historico() {
  const [vacinas, setVacinas] = useState<Vacina[]>([]);
  const [busca, setBusca] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const usuarioId = localStorage.getItem('usuarioId');
    
    if (usuarioId) {
      fetch(`http://localhost:5000/api/vacinas/${usuarioId}`)
        .then(res => res.json())
        .then(data => {
          if (data.sucesso) setVacinas(data.dados);
          setCarregando(false);
        })
        .catch(erro => {
          console.error(erro);
          setCarregando(false);
        });
    } else {
        setCarregando(false);
    }
  }, []);

  const vacinasFiltradas = vacinas.filter((vacina) =>
    vacina.nome.toLowerCase().includes(busca.toLowerCase())
  );
  
  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-7xl mx-auto pb-20">
      
      {/* Cabeçalho */}
      <div className="mb-8 border-b border-slate-200 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-800">Minhas Vacinas</h1>
          <p className="text-slate-500 mt-1">
            Histórico oficial de imunizações sincronizado em tempo real com o servidor.
          </p>
        </div>
        <div className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-4 py-2 rounded-2xl text-xs font-bold flex items-center gap-2">
          <ShieldCheck size={16} /> Servidor Backend Conectado
        </div>
      </div>

      {/* Barra de Pesquisa e Filtros */}
      <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-200 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Pesquisar vacina..." 
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 focus:outline-none focus:border-teal-500 text-sm font-medium transition-all"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 bg-slate-50 px-4 py-3 rounded-2xl border border-slate-200 w-full sm:w-auto justify-center">
          <Filter size={16} /> Total Registradas: {vacinas.length}
        </div>
      </div>

      {/* Estado de Carregamento */}
      {carregando ? (
        <div className="text-center py-20 text-slate-400 font-bold">
          Carregando dados do servidor backend...
        </div>
      ) : (
        /* Tabela de Vacinas */
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-black text-slate-400 uppercase tracking-wider">
                  <th className="p-6">Imunizante</th>
                  <th className="p-6">Data de Aplicação</th>
                  <th className="p-6">Lote</th>
                  <th className="p-6">Fabricante</th>
                  <th className="p-6">Status / Próxima Dose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
                {vacinasFiltradas.length > 0 ? (
                  vacinasFiltradas.map((vacina) => (
                    <tr key={vacina.id} className="hover:bg-teal-50/30 transition-colors">
                      <td className="p-6 font-bold text-slate-800 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                          <ShieldCheck size={20} />
                        </div>
                        {vacina.nome}
                      </td>
                      <td className="p-6 text-slate-600 flex items-center gap-2">
                        <Calendar size={16} className="text-slate-400" /> {vacina.dataAplicacao}
                      </td>
                      <td className="p-6 font-mono text-xs text-slate-500">{vacina.lote || '-'}</td>
                      <td className="p-6 text-slate-600">{vacina.fabricante || 'Não informado'}</td>
                      <td className="p-6">
                        {vacina.proximaDose ? (
                          <span className="bg-amber-50 text-amber-700 border border-amber-100 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                            <Clock size={14} /> Retorno: {vacina.proximaDose}
                          </span>
                        ) : (
                          <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1.5">
                            <CheckCircle2 size={14} /> Completa / Dose Única
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-16">
                      <div className="text-slate-400 font-bold mb-2">Nenhuma vacina registrada na sua caderneta.</div>
                      <p className="text-slate-400 text-sm">Assim que você tomar uma vacina, ela aparecerá aqui automaticamente.</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}