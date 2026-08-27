import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing'; 
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';
import Perfil from './pages/Perfil';
import Certificado from './pages/Certificado';
import AdicionarDependente from './pages/AdicionarDependente';
import Layout from './components/Layout'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* A raiz do site agora é a Landing Page */}
        <Route path="/" element={<Landing />} />
        
        {/* O Login mudou para cá */}
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/certificado" element={<Certificado />} />
          <Route path="/adicionar-dependente" element={<AdicionarDependente />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;