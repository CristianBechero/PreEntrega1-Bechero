import './App.css'
import NavBar from './components/NavBar/NavBar'
import Item from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <div className="App">
    <NavBar/>
    <Item greeting={`JUGÁ Y GANÁ`}/>
    </div>
  )
}

export default App


