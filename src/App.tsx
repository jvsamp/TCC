import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/certificado" element={<Certificado />} />
          <Route path="/adicionar-dependente" element={<AdicionarDependente />} />
          <Route path="/notificacoes" element={<Notificacoes />} /> {/* Nova Rota */}
          <Route path="/campanhas" element={<Campanhas />} />         {/* Nova Rota */}
          <Route path="/postos" element={<Postos />} />                 {/* Nova Rota */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;