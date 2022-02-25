import React from 'react';
import { connect } from 'react-redux';

function buyProduto( carrinho ) {
  return {
    type: 'BUY_PRODUTO',
    carrinho,
  };
}

const Display = ({ produtoAtivo, dispatch, carrinho }) => (
  <div className='informacoes'>
    <div className='titulo'>
      <strong>{produtoAtivo.nome}</strong>
    </div>
    <div className='preco'>
      <span>R${produtoAtivo.preco}</span>
    </div>
    <div className='cor'>
      <span>Cor {produtoAtivo.cor}</span>
      <button onClick={() => dispatch(buyProduto(carrinho))}>comprar</button>
    </div>
    <img className='imagem' src={produtoAtivo.link}/>
  </div>
)

export default connect(state => ({
  produtoAtivo: state.produtoAtivo,
  carrinho: state.carrinho
}))(Display);
