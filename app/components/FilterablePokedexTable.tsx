import React, { useState, useEffect } from 'react';
import PokemonTypeSelection from './PokemonTypeSelection';
import PokedexTable from './PokedexTable';
import { IPokemon } from '../types'; // Ensure this type is correctly defined based on your data structure

interface FilterablePokedexTableProps {
  pokemons?: IPokemon[]; // Making pokemons an optional prop
}

const FilterablePokedexTable: React.FC<FilterablePokedexTableProps> = ({ pokemons = [] }) => {
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);
  const [filteredPokemons, setFilteredPokemons] = useState<IPokemon[]>(pokemons);

  useEffect(() => {
    // Filter pokemons based on selected type
    if (selectedType) {
      setFilteredPokemons(pokemons.filter(pokemon => pokemon.types.includes(selectedType)));
    } else {
      setFilteredPokemons(pokemons);
    }
  }, [selectedType, pokemons]);

  return (
    <div>
      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />
      <PokedexTable pokemons={filteredPokemons} />
    </div>
  );
};

export default FilterablePokedexTable;
