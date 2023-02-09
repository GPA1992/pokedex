import { useState } from 'react';

export default function useGlobalContextProvider() {
    const [count, setCount] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    return {
        count,
        setCount,
        pokemons,
        setPokemons,
    };
}
