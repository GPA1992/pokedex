/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react';
import { PokemonURL, Pokemon } from '../types/pokemon';

type GlobalContextType = {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    pokemons: Array<PokemonURL>;
    setPokemons: Dispatch<SetStateAction<PokemonURL[]>>;
    pokemonDetails: Pokemon;
    setPokemonDetails: Dispatch<SetStateAction<Pokemon>>;
    pokemonName: string;
    setPokemonName: Dispatch<SetStateAction<string>>;
};

const GlobalContext = createContext<GlobalContextType>({
    count: 0,
    setCount: () => {},
    pokemons: [],
    setPokemons: () => {},
    pokemonDetails: {} as Pokemon,
    setPokemonDetails: () => {},
    pokemonName: '',
    setPokemonName: () => {},
});

export default GlobalContext;
