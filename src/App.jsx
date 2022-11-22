import './App.css'
import Home from './components/Home'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Pokemons from './components/Pokemons';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';
function App() {


  return (
    <div className="App">
      <HashRouter>
        <Link to='/'>Home</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokemons" element={<Pokemons />} />
            <Route path="/pokemons/:id" element={<PokemonDetail />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
