import { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Shield, CheckCircle2 } from 'lucide-react';

export default function Perfil() {
  const [perfil, setPerfil] = useState<any>(null);
  const [carregando, setCarregando] = useState(true);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/perfil')
      .then((res) => res.json())
      .then((data) => {
        if (data.sucesso) {
          setPerfil(data.dados);
        }
        setCarregando(false);
      });
  }, []);

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/perfil', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(perfil)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.sucesso) {
          setMensagem('Dados atualizados com sucesso no servidor!');
          setTimeout(() => setMensagem(''), 4000);
        }
      });
  };

  if (carregando) return <div className="p-12 text-center font-bold text-slate-400">Carregando perfil...</div>;

  return (
    <div className="p-8 md:p-12 animate-fade-in max-w-4xl mx-auto pb-20">
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800">Meu Perfil e Dados</h1>
        <p className="text-slate-500 mt-1">Gerencie suas informações pessoais sincronizadas com a base central.</p>
      </div>

      {mensagem && (
        <div className="mb-6 bg-emerald-50 text-emerald-700 border border-emerald-200 p-4 rounded-2xl text-sm font-bold flex items-center gap-2">
          <CheckCircle2 size={18} /> {mensagem}
        </div>
      )}

      <form onSubmit={handleSalvar} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Nome Completo</label>
            <input 
              type="text" 
              value={perfil.nome || ''} 
              onChange={(e) => setPerfil({ ...perfil, nome: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-teal-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">CPF</label>
            <input 
              type="text" 
              value={perfil.cpf || ''} 
              disabled 
              className="w-full px-4 py-3 bg-slate-100 rounded-2xl border border-slate-200 text-sm font-bold text-slate-400 cursor-not-allowed" 
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Cartão Nacional de Saúde (CNS)</label>
            <input 
              type="text" 
              value={perfil.cns || ''} 
              disabled 
              className="w-full px-4 py-3 bg-slate-100 rounded-2xl border border-slate-200 text-sm font-bold text-slate-400 cursor-not-allowed" 
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">E-mail</label>
            <input 
              type="email" 
              value={perfil.email || ''} 
              onChange={(e) => setPerfil({ ...perfil, email: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-teal-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Telefone</label>
            <input 
              type="text" 
              value={perfil.telefone || ''} 
              onChange={(e) => setPerfil({ ...perfil, telefone: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-teal-500" 
            />
          </div>
          <div>
            <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Cidade / UF</label>
            <input 
              type="text" 
              value={perfil.cidade || ''} 
              onChange={(e) => setPerfil({ ...perfil, cidade: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 rounded-2xl border border-slate-200 text-sm font-bold text-slate-700 focus:outline-none focus:border-teal-500" 
            />
          </div>
        </div>
        <div className="pt-4 border-t border-slate-100 flex justify-end">
          <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-3 rounded-2xl transition-all shadow-lg shadow-teal-600/20 text-sm">
            Salvar Alterações
          </button>
        </div>
      </form>
    </div>
  );
}