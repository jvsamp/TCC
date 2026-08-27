import CartaoVacina from '../components/CartaoVacina'; // A nossa peça de Lego continua aqui!

export default function Historico() {
  return (
    // Colocamos um padding (p-8) para desgrudar das bordas e uma animação suave
    <div className="p-8 animate-fade-in max-w-4xl mx-auto">
      
      {/* Cabeçalho Limpo (Sem botão de voltar) */}
      <div className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="text-3xl font-black text-slate-800">Minhas Vacinas</h1>
        <p className="text-slate-500 mt-2">
          Histórico completo de imunização registrado na sua caderneta.
        </p>
      </div>

      {/* Lista de Vacinas usando o nosso Componente */}
      <div className="space-y-4">
        
        <CartaoVacina 
          nome="Febre Amarela" 
          tipo="Dose Única" 
          status="Aplicada" 
          data="10 Fev 2024" 
          lote="FA2023-X9" 
        />

        <CartaoVacina 
          nome="Covid-19 (Bivalente)" 
          tipo="Dose de Reforço" 
          status="Aplicada" 
          data="05 Nov 2023" 
          lote="CV-90812" 
        />

        <CartaoVacina 
          nome="Hepatite B" 
          tipo="1ª Dose" 
          status="Agendada" 
          data="25 Set 2026" 
        />

      </div>
    </div>
  );
}