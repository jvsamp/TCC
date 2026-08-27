import { User, Mail, Phone, MapPin, CreditCard, Shield, Calendar, Activity, Heart, Home } from 'lucide-react';

export default function Perfil() {
  return (
    <div className="p-8 animate-fade-in max-w-5xl mx-auto pb-20">
      
      {/* Cabeçalho */}
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800">Meu Perfil</h1>
        <p className="text-slate-500 mt-2">
          Visualize e gerencie suas informações pessoais, endereço e dados de saúde.
        </p>
      </div>

      {/* Cartão Principal de Perfil */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* Banner azul no topo */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

        <div className="px-8 pb-8 relative">
          
          {/* Avatar Flutuante */}
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg absolute -top-12 border-4 border-white">
            <span className="text-3xl font-black text-blue-600">JV</span>
          </div>

          {/* Nome e Selo */}
          <div className="pt-16 flex justify-between items-start mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">João Victor Sampaio</h2>
              <p className="text-slate-500 flex items-center gap-2 mt-1">
                <MapPin size={16} /> Saquarema, RJ
              </p>
            </div>
            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Shield size={14} /> Cadastro Validado (Gov.br)
            </span>
          </div>

          {/* Grade de Informações (3 Colunas em telas grandes) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-t border-slate-100 pt-8">
            
            {/* Coluna 1: Dados de Identificação */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase flex items-center gap-2">
                <User size={16} /> Identificação
              </h3>

              <div>
                <p className="text-sm text-slate-500">CPF</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <CreditCard size={16} className="text-blue-500" /> 123.456.789-00
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Cartão Nacional de Saúde (CNS)</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <Activity size={16} className="text-blue-500" /> 700 0000 0000 0000
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Data de Nascimento</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <Calendar size={16} className="text-blue-500" /> 15/08/1998
                </p>
              </div>
            </div>

            {/* Coluna 2: Contato e Endereço */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase flex items-center gap-2">
                <MapPin size={16} /> Contato e Endereço
              </h3>

              <div>
                <p className="text-sm text-slate-500">E-mail</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <Mail size={16} className="text-blue-500" /> joaovictor@email.com
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Telefone / WhatsApp</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  <Phone size={16} className="text-blue-500" /> (22) 99999-9999
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Endereço Residencial</p>
                <p className="font-medium text-slate-800 flex items-start gap-2">
                  <Home size={16} className="text-blue-500 shrink-0 mt-0.5" /> 
                  <span className="leading-snug">
                    Rua dos Bandeirantes, 123<br/>
                    Centro, Saquarema - RJ<br/>
                    CEP: 28990-000
                  </span>
                </p>
              </div>
            </div>

            {/* Coluna 3: Informações Médicas e Emergência */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase flex items-center gap-2">
                <Heart size={16} /> Dados Clínicos
              </h3>

              <div>
                <p className="text-sm text-slate-500">Tipo Sanguíneo</p>
                <p className="font-black text-red-600 text-lg">O+</p>
              </div>

              <div>
                <p className="text-sm text-slate-500">Alergias Conhecidas</p>
                <p className="font-medium text-slate-800">Nenhuma registrada</p>
              </div>

              <div className="bg-red-50 p-4 rounded-xl border border-red-100 mt-2">
                <p className="text-xs font-bold text-red-800 uppercase tracking-wider mb-1">Contato de Emergência</p>
                <p className="font-bold text-slate-800">Marcella</p>
                <p className="text-sm text-slate-600">(22) 98888-8888</p>
              </div>
            </div>
            
          </div>

          {/* Botão de Ação */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex justify-end">
            <button className="bg-slate-100 text-slate-700 font-bold py-3 px-6 rounded-xl hover:bg-slate-200 transition-colors">
              Solicitar Alteração de Dados
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}