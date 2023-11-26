import React from 'react';
import dynamic from 'next/dynamic';
// import { trpc } from './servies'; // Assuming you have a trpc utility set up for tRPC hooks

const FilterablePokedexTable = dynamic(
  () => import('./components/FilterablePokedexTable.client'),
  { ssr: false } // This will load the component only on the client-side
);

export interface PageProps {
  params?: any;
  searchParams?: any;
}

const Page: React.FC<PageProps> = ({ params, searchParams }) => {
  // const { data: pokemons, isLoading } = trpc.useQuery(['getAllPokemon']); // Replace 'getAllPokemon' with your actual tRPC query

  // if (isLoading) {
  //   return <div>Loading...</div>; // Or any loading component you prefer
  // }

  // if (!pokemons) {
  //   return <div>No Pokémon found.</div>;
  // }

  return (
    <div>
      <h1>Welcome to the Pokedex</h1>
      <FilterablePokedexTable />
    </div>
  );
};

export default Page;
