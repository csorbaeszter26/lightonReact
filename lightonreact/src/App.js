import logo from './logo.svg';
import './App.css';
import Jatekter from './lighton/Jatekter';


function App() {

  const [lista, setLista] = listafeltolt()

  function listafeltolt(){
    for (let i = 0; i < 9; i++) {
      let szam = Math.floor(Math.random() * 2)
      this.lista.push(szam)
  }
  function katt(adat){
    const segedlista=[...lista]
    segedlista[adat]=!segedlista[adat]
    setLista([...segedlista])
  }

  }
  return (
    <div className="App">
      <header className="App-header">LightOn</header>
      <article>
        <h2>Ez a LightOn</h2>
        <Jatekter lista={lista} katt={katt}/>
      </article>
      <footer>Csorba Eszter</footer>
    </div>
  );
}

export default App;
