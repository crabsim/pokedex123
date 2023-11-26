import React from 'react';
import FilterablePokedexTable from '../components/FilterablePokedexTable';
import { trpc } from '../utils/trpc'; // Assuming you have a trpc utility set up for tRPC hooks

const Home: React.FC = () => {
  const { data: pokemons, isLoading } = trpc.useQuery(['getAllPokemon']); // Replace 'getAllPokemon' with your actual tRPC query

  if (isLoading) {
    return <div>Loading...</div>; // Or any loading component you prefer
  }

  if (!pokemons) {
    return <div>No Pokémon found.</div>;
  }

  return (
    <div>
      <h1>Welcome to the Pokedex</h1>
      <FilterablePokedexTable pokemons={pokemons} />
    </div>
  );
};

export default Home;
