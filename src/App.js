import { Outlet } from 'react-router-dom';
import './App.css';
import Carroussel from './componentes/Carroussel';
import Menu from './componentes/Menu';

function App() {
  return (
    <>
      <Menu></Menu>
      <main>
        <div className="w3-container w3-padding-16 w3-margin-top">
          <h1>Exercicio da Aula</h1>
        </div>
        <Carroussel></Carroussel>
        <Outlet></Outlet>
      </main>
    </>
);
}

export default App;
