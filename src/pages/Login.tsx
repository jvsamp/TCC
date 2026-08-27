import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';

export default function Login() {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita recarregar a página
    
    try {
      const response = await fetch('http://localhost:5000/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cpf, senha })
      });
      
      const data = await response.json();
      
      if (data.sucesso) {
        // Salva o ID do usuário no navegador para as outras telas saberem quem está logado
        localStorage.setItem('usuarioId', data.dados.id);
        navigate('/historico'); // Manda para a tela inicial após logar
      } else {
        alert(data.mensagem); // Mostra erro de senha ou CPF
      }
    } catch (erro) {
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800 relative overflow-hidden">
      
      {/* Círculos decorativos de fundo suaves seguindo a identidade */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-100/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl -z-10"></div>

      {/* Botão para voltar à Vitrine */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100"
      >
        <ArrowLeft size={18} /> Voltar ao Início
      </Link>

      {/* Cartão de Login Moderno */}
      <div className="bg-white/80 backdrop-blur-xl max-w-md w-full rounded-[2.5rem] shadow-xl shadow-teal-900/5 p-8 md:p-10 border border-white">
        
        {/* Cabeçalho do Login com a Marca EasyVacc */}
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-2xl flex items-center justify-center mb-4 shadow-sm p-2">
            <img 
              src="/logo.png" 
              alt="Logo EasyVacc" 
              className="w-full h-full object-contain"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80?text=eV'; }}
            />
          </div>
          
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Entrar no <span className="text-teal-600">EasyVacc</span></h1>
          <p className="text-slate-500 mt-2 text-sm font-medium">
            Acesse com seu CPF para visualizar seu histórico de vacinação.
          </p>
        </div>

        {/* Formulário */}
        <form onSubmit={handleLogin} className="space-y-5">
          
          <div>
            <label htmlFor="cpf" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">CPF</label>
            <input 
             type="text" 
            placeholder="Digite seu CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Senha</label>
            <input 
              type="password" 
              placeholder="Sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl py-4 font-black text-lg hover:from-emerald-700 hover:to-teal-700 active:scale-[0.98] transition-all mt-4 shadow-lg shadow-teal-600/20 flex items-center justify-center gap-2"
          >
            <Lock size={18} /> Entrar na Caderneta
          </button>
          
        </form>

        <div className="mt-8 text-center border-t border-slate-100 pt-6">
          <a href="#" className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors">
            Esqueci minha senha
          </a>
        </div>
        
      </div>
    </div>
  );
}