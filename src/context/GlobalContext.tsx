/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, Dispatch, SetStateAction } from 'react';
import { PokemonList } from '../types/pokemon';

type GlobalContextType = {
    count: number;
    setCount: Dispatch<SetStateAction<number>>;
    pokemons: Array<PokemonList>;
    setPokemons: Dispatch<SetStateAction<never[]>>;
};

const GlobalContext = createContext<GlobalContextType>({
    count: 0,
    setCount: () => {},
    pokemons: [],
    setPokemons: () => {},
});

export default GlobalContext;
