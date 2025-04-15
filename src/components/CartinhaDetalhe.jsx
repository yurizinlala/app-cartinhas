import React from 'react';
import { useParams } from 'react-router-dom';
import cartinhas from '../data/cartinhas';

const CartinhaDetalhe = () => {
  const { id } = useParams();
  const cartinha = cartinhas.find(c => c.id === parseInt(id));

  if (!cartinha) {
    return <div>Cartinha não encontrada</div>;
  }

  if (!cartinha.desbloqueada) {
    return <div>Essa cartinha está bloqueada!</div>;
  }

  return (
    <div>
      <h2>{cartinha.titulo}</h2>
      <p>{cartinha.conteudo}</p>
    </div>
  );
};

export default CartinhaDetalhe;