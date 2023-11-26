import React from 'react';
import PokemonRow from './PokemonRow';
import { IPokemon } from '../types'; 

interface PokedexTableProps {
  pokemons: IPokemon[];
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
    <div className="pokedex-table">
      {pokemons.map(pokemon => <PokemonRow key={pokemon.id} pokemon={pokemon} />)}
    </div>
  );
};

export default PokedexTable;
