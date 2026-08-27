export default function Dashboard() {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      
      <div className="text-blue-600 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" className="text-blue-500"/>
          <path d="M22 17c0 1.66-1.34 3-3 3H5c-1.66 0-3-1.34-3-3s1.34-3 3-3h14c1.66 0 3 1.34 3 3z" className="text-blue-700 opacity-20"/>
        </svg>
      </div>

      <h1 className="text-4xl font-bold text-slate-800 mb-4">
        Bem-vindo ao <span className="text-blue-600">EasyVacc</span>
      </h1>
      
      <p className="text-lg text-slate-500 mb-12 max-w-lg">
        Cuidar da sua saúde nunca foi tão fácil. Utilize o menu para acessar seus serviços.
      </p>

      {/* Caixa de Informação com o texto corrigido */}
      <div className="bg-cyan-50 border border-cyan-100 rounded-2xl p-8 max-w-2xl shadow-sm">
        <h2 className="text-xl font-bold text-teal-900 mb-3 flex items-center justify-center gap-2">
          <span className="bg-teal-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">i</span>
          Por onde começar?
        </h2>
        <p className="text-teal-800 leading-relaxed text-left">
          Clique em <strong className="font-black">Minhas Vacinas</strong> no menu lateral para visualizar todo o seu histórico de imunização, em <strong className="font-black">Emitir Certificado</strong> para gerar e baixar o seu comprovante oficial em PDF, ou acesse <strong className="font-black">Meu Perfil</strong> para conferir seus dados cadastrais.
        </p>
      </div>

    </div>
  );
}