import { useState } from 'react';
import { PokemonURL, Pokemon } from '../types/pokemon';

export default function useGlobalContextProvider() {
    const [count, setCount] = useState(0);
    const [pokemons, setPokemons] = useState([] as PokemonURL[]);
    const [pokemonDetails, setPokemonDetails] = useState({} as Pokemon);
    const [pokemonName, setPokemonName] = useState('');
    return {
        count,
        setCount,
        pokemons,
        setPokemons,
        pokemonDetails,
        setPokemonDetails,
        pokemonName,
        setPokemonName,
    };
}
