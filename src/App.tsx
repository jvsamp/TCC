import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Historico from './pages/Historico';
import Perfil from './pages/Perfil';
import Certificado from './pages/Certificado'; 
import Layout from './components/Layout'; 
import AdicionarDependente from './pages/AdicionarDependente';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        
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