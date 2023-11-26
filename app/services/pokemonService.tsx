// pokemonService.ts
import { prisma } from '../prismaClient';

async function addPokemon(name: string, types: string[], sprite: string) {
  return await prisma.pokemon.create({
    data: {
      name,
      types,
      sprite,
    },
  });
}

async function getPokemonByName(name: string) {
    return await prisma.pokemon.findUnique({
      where: { name },
    });
  }
  
  async function getAllPokemon() {
    return await prisma.pokemon.findMany();
  }