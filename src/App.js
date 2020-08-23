import React from 'react';
import Pais from './pais';

const database = ()=>([
  {
    nombre: 'Ecuador',
    historia: 'Historia de Ecuador',
    piedras: 'Esmeralda',
    typos: ['verdes', 'azules', 'rojas'],
    cultura: 'Cultura de Ecuador',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg'
  },
  {
    nombre: 'Mexico',
    historia: 'Historia de Mexico',
    piedras: 'Diamantes',
    typos: ['rosados', 'negros', 'azules'],
    cultura: 'Cultura de Mexico',
    photo: 'https://www.larousse.fr/encyclopedie/data/images/1009548-Drapeau_du_Mexique.jpg'
  },
  {
    nombre: 'Colombia',
    historia: 'Historia de Colombia',
    piedras: 'Rubies',
    typos: ['Rojos', 'Verdes'],
    cultura: 'Cultura de Colombia',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1024px-Flag_of_Colombia.svg.png'
  },
  {
    nombre: 'Venezuela',
    historia: 'Historia de Venezuela',
    piedras: 'Zafiro',
    cultura: 'Cultura de Venezuela',
    photo: 'https://www.ecured.cu/images/5/5a/Bandera_venezuela.jpg'
  }
]) 

function App() {
  const data = database()

  return (
    <div className="App">
      <h1>Tipos de Esmeraldas</h1>

      {
        data.map((elemento, index)=>{
          return (
            <Pais paisData={elemento} key={index}/>
          )
        })
      }

      <footer>Footer</footer>
    </div>
  );
}

export default App;
 