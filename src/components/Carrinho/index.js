import React from 'react';
import { connect } from 'react-redux';


const Display = ({ carrinho }) => (
  <div className='carrinho'>
    {console.log(carrinho)}
    <div>{carrinho.nome}</div>
    <div>{carrinho.preco}</div>
  </div>
)

export default connect(state => ({
  carrinho: state.carrinho
}))(Display);
