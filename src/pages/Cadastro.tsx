import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, FileText, Mail, MapPin, ArrowLeft } from 'lucide-react';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cns, setCns] = useState('');
  const [email, setEmail] = useState('');
  const [cidade, setCidade] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    try {
      const response = await fetch('http://localhost:5000/api/usuarios/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, cns, email, cidade, senha })
      });
      
      const data = await response.json();
      
      if (data.sucesso) {
        alert('Cadastro realizado com sucesso! Faça seu login.');
        navigate('/login');
      } else {
        setErro(data.mensagem);
      }
    } catch (error) {
      setErro('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans text-slate-800 relative overflow-hidden">
      
      {/* Círculos decorativos de fundo */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-100/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl -z-10"></div>

      <div className="bg-white/80 backdrop-blur-xl max-w-xl w-full rounded-[2.5rem] shadow-xl shadow-teal-900/5 p-8 md:p-10 border border-white my-8">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-800 tracking-tight">Criar nova conta</h2>
          <p className="text-slate-500 mt-2 text-sm font-medium">
            Ou{' '}
            <Link to="/login" className="text-teal-600 hover:text-teal-700 font-bold transition-colors">
              já tenho uma conta (Fazer Login)
            </Link>
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleCadastro}>
          
          {/* Campo Nome */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Nome Completo</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text" required value={nome} onChange={(e) => setNome(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Campo CPF */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">CPF</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text" required value={cpf} onChange={(e) => setCpf(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Somente números"
                />
              </div>
            </div>

            {/* Campo CNS */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Cartão SUS</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text" required value={cns} onChange={(e) => setCns(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Número do CNS"
                />
              </div>
            </div>
          </div>

          {/* Campo Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">E-mail</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Campo Cidade */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Cidade</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text" required value={cidade} onChange={(e) => setCidade(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Sua cidade"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password" required value={senha} onChange={(e) => setSenha(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="Crie uma senha"
                />
              </div>
            </div>
          </div>

          {/* Mensagem de Erro */}
          {erro && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm text-center font-semibold mt-4 border border-red-100">
              {erro}
            </div>
          )}

          {/* Botão de Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl py-4 font-black text-lg hover:from-emerald-700 hover:to-teal-700 active:scale-[0.98] transition-all mt-6 shadow-lg shadow-teal-600/20"
          >
            Finalizar Cadastro
          </button>
          
        </form>
      </div>
    </div>
  );
}