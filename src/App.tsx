import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';
import Perfil from './pages/Perfil';
import Certificado from './pages/Certificado';
import AdicionarDependente from './pages/AdicionarDependente';
import Notificacoes from './pages/Notificacoes'; // <-- Nova importação
import Campanhas from './pages/Campanhas';     // <-- Nova importação
import Postos from './pages/Postos';             // <-- Nova importação
import Layout from './components/Layout'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROTAS SEM MENU (Tela Cheia) */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} /> {/* <-- Movi para cá! */}
        
        {/* ROTAS COM MENU (Dentro do Layout) */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/certificado" element={<Certificado />} />
          <Route path="/adicionar-dependente" element={<AdicionarDependente />} />
          <Route path="/notificacoes" element={<Notificacoes />} /> 
          <Route path="/campanhas" element={<Campanhas />} />         
          <Route path="/postos" element={<Postos />} />   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
