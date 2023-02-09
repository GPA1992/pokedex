import React, { useEffect } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { fetchPokemonApi } from '../../services/fetchPokemons';
import SinglePokemon from '../singlePokemon';
import './pokemonList.styles.sass';

export default function GetPokemonList() {
    const { pokemons, setPokemons } = useGlobalContext();

    useEffect(() => {
        async function fetchPokemons() {
            const data = await fetchPokemonApi();
            setPokemons(data.results);
        }
        fetchPokemons();
    }, []);

    const logList = () => {
        console.log(pokemons);
    };
    return (
        <div className="pokemons">
            {pokemons.map((poke, index) => {
                return (
                    <div id="pokemon-list" key={index}>
                        <SinglePokemon name={poke.name} url={poke.url} />
                    </div>
                );
            })}
        </div>
    );
}
