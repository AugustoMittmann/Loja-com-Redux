import { createStore } from 'redux';

const estadoInicial = {
  produtoAtivo: {},
  produtos: [
    {
      id:0, 
      nome: 'Lápis',
      preco: 1.20, 
      cor: 'Preto',
      link: 'https://www.gimba.com.br/objetosmidia/ExibirObjetoMidia?id=77751'
    },
    {
      id:1, 
      nome: 'Caderno',
      preco: 15.90, 
      cor: 'Azul',
      link: 'https://a-static.mlcdn.com.br/618x463/caderno-brochura-universitario-capa-dura-96-fls-azul-marcas-tilibra/funpaperpapelaria2/11380233411/cdfbfbc8e1d8750497afe749deec5cd6.jpg'
    },
    {
      id:2, 
      nome: 'Caneta',
      preco: 1.80, 
      cor: 'Verde',
      link: 'https://www.papelariaartnova.com.br/img/products/caneta-esferografica-bic-cristal-verde_1_2000.jpg'
    }
  ]
};

function reducer(state = estadoInicial, action) {
  if(action.type === 'SET_PRODUTO') {
    return {...state, produtoAtivo: action.produtos }
  }
  return state
}

const store = createStore(reducer);

export default store;