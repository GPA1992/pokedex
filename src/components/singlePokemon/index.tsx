import React, { useEffect, useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { fetchSinglePokemonApiByURL } from '../../services/fetchPokemons';
import { PokemonURL } from '../../types/pokemon';
import './singlePokemon.styles.sass';

export default function SinglePokemon(props: PokemonURL) {
    const [pokemonFrontalSprite, setPokemonFrontalSprite] = useState<string>();
    const { pokemons, setPokemonName } = useGlobalContext();
    useEffect(() => {
        async function fetchPokemon() {
            const { sprites } = await fetchSinglePokemonApiByURL(props.url);
            setPokemonFrontalSprite(sprites.front_default);
        }
        fetchPokemon();
    }, [pokemons]);

    {
        /* <a onClick={() => inicioRedirect()} className="navbar" id="homeHeader" href="#photo-info">
        Inicio
    </a>; */
    }
    return (
        <div onClick={() => setPokemonName(props.name)} className="single-pokemon">
            <p>{props.name}</p>
            <img src={pokemonFrontalSprite} alt="" />
            <a href="#pokemon-detail" className="pokemon-detail-btn">
                detalhe
            </a>
        </div>
    );
}
