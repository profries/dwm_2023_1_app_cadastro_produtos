import './App.css';
import Carroussel from './componentes/Carroussel';
import ListProdutos from './componentes/ListProdutos';
import Menu from './componentes/Menu';
import produtos from './data/produtos.json';

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <div className="w3-container w3-padding-16 w3-margin-top">
          <h1>Exercicio da Aula</h1>
        </div>
        <Carroussel></Carroussel>
        <ListProdutos></ListProdutos>
      </main>
    </>
);
}

export default App;
