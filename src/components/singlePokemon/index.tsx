import React, { useEffect, useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { fetchSinglePokemonApi } from '../../services/fetchPokemons';
import { PokemonList } from '../../types/pokemon';
import './singlePokemon.styles.sass';

export default function SinglePokemon(props: PokemonList) {
    const [pokemonFrontalSprite, setPokemonFrontalSprite] = useState<string>();
    const { pokemons } = useGlobalContext();
    useEffect(() => {
        async function fetchPokemon() {
            const { sprites } = await fetchSinglePokemonApi(props.url);
            setPokemonFrontalSprite(sprites.front_default);
        }
        fetchPokemon();
    }, [pokemons]);

    return (
        <div className="single-pokemon">
            <img src={pokemonFrontalSprite} alt="" />
            <p>{props.name}</p>
        </div>
    );
}
