import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  // Função para simular o login e ir para o Dashboard
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800">
      
      {/* Cartão de Login */}
      <div className="bg-white max-w-md w-full rounded-3xl shadow-xl p-8 border border-slate-100">
        
        {/* Cabeçalho do Login com a Marca EasyVacc */}
        <div className="text-center mb-8 flex flex-col items-center">
          
          {/* Puxando a mesma imagem da logo que está na pasta public */}
          <img 
            src="/logo.png" 
            alt="Logo EasyVacc" 
            className="w-24 h-24 object-contain mb-4"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://via.placeholder.com/96?text=eV';
            }}
          />
          
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">EasyVacc</h1>
          <p className="text-slate-500 mt-2 text-sm">
            Acesse com seu CPF para visualizar seu histórico de vacinação.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          <div>
            <label htmlFor="cpf" className="block text-sm font-bold text-slate-700 mb-1">CPF</label>
            <input 
              type="text" 
              id="cpf" 
              placeholder="000.000.000-00" 
              className="w-full border border-slate-200 rounded-xl p-4 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-bold text-slate-700 mb-1">Senha</label>
            <input 
              type="password" 
              id="senha" 
              placeholder="••••••••" 
              className="w-full border border-slate-200 rounded-xl p-4 bg-slate-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white rounded-xl py-4 font-bold text-lg hover:bg-blue-700 active:bg-blue-800 transition-colors mt-4 shadow-md shadow-blue-200"
          >
            Entrar
          </button>
          
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
            Esqueci minha senha
          </a>
        </div>
        
      </div>
    </div>
  );
}