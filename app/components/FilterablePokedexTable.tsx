import React, { useState, useEffect } from 'react';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';
import { IPokemon } from '../types'; 

const FilterablePokedexTable: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>([]);
  const [allPokemons, setAllPokemons] = useState<IPokemon[]>([]); 

  useEffect(() => {
    // Fetch all pokemons and set them to allPokemons
  }, []);

  useEffect(() => {
    if (selectedType) {
      setFilteredPokemons(allPokemons.filter(pokemon => pokemon.types.includes(selectedType)));
    } else {
      setFilteredPokemons(allPokemons);
    }
  }, [selectedType, allPokemons]);

  return (
    <div className="filterable-pokedex-table">
      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      <PokedexTable pokemons={filteredPokemons} />
    </div>
  );
};

export default FilterablePokedexTable;
