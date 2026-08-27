import { UserPlus, Save } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdicionarDependente() {
  const navigate = useNavigate();

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    // No futuro, aqui enviaremos os dados para o banco.
    // Por enquanto, apenas voltamos para o Início.
    alert("Dependente cadastrado com sucesso!");
    navigate('/dashboard');
  };

  return (
    <div className="p-8 animate-fade-in max-w-2xl mx-auto">
      
      <div className="mb-8 border-b border-slate-200 pb-4">
        <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
          <UserPlus size={24} />
        </div>
        <h1 className="text-3xl font-black text-slate-800">Adicionar Dependente</h1>
        <p className="text-slate-500 mt-2">
          Vincule a caderneta de um filho ou familiar à sua conta principal.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
        <form onSubmit={handleSalvar} className="space-y-6">
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Ex: Lucas Sampaio" 
              className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">CPF (Opcional)</label>
              <input 
                type="text" 
                placeholder="000.000.000-00" 
                className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Data de Nascimento</label>
              <input 
                type="date" 
                className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-600"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">Parentesco / Vínculo</label>
            <select className="w-full border border-slate-200 rounded-xl p-3 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all text-slate-700" required>
              <option value="">Selecione um vínculo...</option>
              <option value="filho">Filho(a)</option>
              <option value="conjuge">Cônjuge</option>
              <option value="pai_mae">Pai / Mãe</option>
              <option value="outro">Outro (Tutor Legal)</option>
            </select>
          </div>

          <div className="pt-6 border-t border-slate-100 flex justify-end gap-3">
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-3 font-bold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancelar
            </button>
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-md hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              <Save size={20} />
              Salvar Dependente
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}