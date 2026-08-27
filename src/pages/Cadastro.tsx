import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Lock, FileText, } from 'lucide-react';

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
    setErro(''); // Limpa erros anteriores

    try {
  const response = await fetch('http://localhost:5000/api/usuarios/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, cpf, cns, email, cidade, senha })
      });
      
      const data = await response.json();
      
      if (data.sucesso) {
        alert('Cadastro realizado com sucesso! Faça seu login.');
        navigate('/login'); // Redireciona para o login
      } else {
        setErro(data.mensagem); // Mostra o erro (ex: CPF já existe)
      }
    } catch (error) {
      setErro('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Criar nova conta
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Ou{' '}
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            já tenho uma conta (Fazer Login)
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleCadastro}>
            
            {/* Campo Nome */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome Completo</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>

            {/* Campo CPF */}
            <div>
              <label className="block text-sm font-medium text-gray-700">CPF</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="Somente números"
                />
              </div>
            </div>

            {/* Campo Senha */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Senha</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="Crie uma senha segura"
                />
              </div>
            </div>

{/* Campo CNS */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Cartão do SUS (CNS)</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  required
                  value={cns}
                  onChange={(e) => setCns(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="Número do CNS"
                />
              </div>
            </div>

            {/* Campo Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">E-mail</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Campo Cidade */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Cidade</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="text"
                  required
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full px-3 sm:text-sm border-gray-300 rounded-md py-2 border"
                  placeholder="Sua cidade"
                />
              </div>
            </div>

            {/* Mensagem de Erro */}
            {erro && (
              <div className="text-red-500 text-sm text-center font-medium">
                {erro}
              </div>
            )}

            {/* Botão de Submit */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cadastrar
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}