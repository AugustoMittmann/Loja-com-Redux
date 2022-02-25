import React from 'react';
import { connect } from 'react-redux';

function setaProduto(produtos) {
  return {
    type: 'SET_PRODUTO',
    produtos,
  };
}

const Produtos = ({ produtos, dispatch }) => (
  <div className='miniaturas'>
    {
      produtos.map(produtos => (
        <div key={produtos.id} className='produto' onClick={() => dispatch(setaProduto(produtos))}>
          <strong>{produtos.nome}</strong>
        </div>
      ))
    }
  </div>
)

export default connect(state => ({ 
  produtos: state.produtos,
  carrinho: state.carrinho
 }))(Produtos);