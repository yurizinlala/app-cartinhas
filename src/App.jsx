import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cartinhas from './pages/Cartinhas';
import Mensagem from './pages/Mensagem';
import NossoCantinho from './pages/NossoCantinho';
import Configuracoes from './pages/Configuracoes';

import CartinhaDetalhe from './components/CartinhaDetalhe';

function App() {
  return (
    <Router>
      <div className="pb-20"> {/* Padding pra não cobrir o conteúdo com a navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartinhas" element={<Cartinhas />} />
            <Route path="/cartinhas/:id" element={<CartinhaDetalhe />} />
          <Route path="/mensagem" element={<Mensagem />} />
          <Route path="/nosso-cantinho" element={<NossoCantinho />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
        </Routes>
      </div>
      <Navbar />
    </Router>
  );
}

export default App;