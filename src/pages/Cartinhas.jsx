import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Fuse from 'fuse.js'; // importação do Fuse
import cartinhas from '../data/cartinhas';

const Cartinhas = () => {
  const [busca, setBusca] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('todas');

  // Configura o Fuse para buscar no título
  const fuse = new Fuse(cartinhas, {
    keys: ['titulo'],
    threshold: 0.4, // 0 = match exato | 1 = qualquer coisa parecida
  });

  // Se houver busca, usamos o Fuse pra filtrar
  const resultadosBusca = busca
    ? fuse.search(busca).map(result => result.item)
    : cartinhas;

  // Filtro final com base na categoria também
  const cartinhasFiltradas = resultadosBusca.filter(cartinha => {
    if (categoriaSelecionada === 'todas') return true;
    return cartinha.categoria === categoriaSelecionada;
  });

  // Categorias possíveis (pode ser melhorado no futuro se quiser pegar isso dinamicamente)
  const categorias = ['todas', 'feliz', 'triste', 'motivacional'];

  return (
    <div>
      <h1>Cartinhas</h1>

      {/* Input de busca */}
      <input
        type="text"
        placeholder="Buscar cartinha..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />

      {/* Filtros por categoria */}
      <div style={{ marginBottom: '20px' }}>
        {categorias.map(categoria => (
          <button
            key={categoria}
            onClick={() => setCategoriaSelecionada(categoria)}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              backgroundColor: categoriaSelecionada === categoria ? '#8ad' : '#eee',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
          </button>
        ))}
      </div>

      {/* Lista de cartinhas filtradas */}
      <ul>
        {cartinhasFiltradas.map(cartinha => (
          <li key={cartinha.id}>
            {cartinha.desbloqueada ? (
              <Link to={`/cartinhas/${cartinha.id}`}>
                {cartinha.titulo}
              </Link>
            ) : (
              <span>🔒 {cartinha.titulo}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cartinhas;
