import React from 'react';
import { connect } from 'react-redux';

const Display = ( produtoAtivo ) => (
  <div className='informacoes'>
    <div className='titulo'>
      <strong>{produtoAtivo.produtoAtivo.nome}</strong>
    </div>
    <div className='preco'>
      <span>R${produtoAtivo.produtoAtivo.preco}</span>
    </div>
    <div className='cor'>
      <span>Cor {produtoAtivo.produtoAtivo.cor}</span>
    </div>
    <img className='imagem' src={produtoAtivo.produtoAtivo.link}/>
  </div>
)

export default connect(state => ({
  produtoAtivo: state.produtoAtivo
}))(Display);
