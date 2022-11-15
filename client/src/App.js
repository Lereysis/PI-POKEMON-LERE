import { Route, Routes } from 'react-router-dom';
import Home from './views/Home/Home';
import Landing from './views/Landing/Landing'
import CreatePokemon from './views/CreatePokemon/CreatePokemon';
import NotFound from './views/NotFound/NotFound';
import PokemonDetails from './views/PokemonDetails/PokemonDetails';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/pokemon/details/:id' element={<PokemonDetails/>}/>
      <Route path='/create-pokemon' element={<CreatePokemon/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
}                

export default App;
