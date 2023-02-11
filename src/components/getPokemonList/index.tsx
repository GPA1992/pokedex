import React, { useEffect, useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { nextOrPreviousFecthPokemons } from '../../services/fetchPokemons';
import GetPokemonByName from '../getPokemonByName';
import PokemonDetails from '../pokemonDetails';
import SinglePokemon from '../singlePokemon';
import './pokemonList.styles.sass';

export default function GetPokemonList() {
    const { pokemons, setPokemons } = useGlobalContext();
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        async function fetchPokemons() {
            const data = await nextOrPreviousFecthPokemons(offset.toString());
            setPokemons(data.results);
        }
        fetchPokemons();
    }, [offset]);

    return (
        <div className="list-btn">
            <div>
                <div className="btn-box">
                    <button
                        disabled={offset === 0}
                        onClick={() => setOffset(offset - 20)}
                        className="change-pokemons-list-btn"
                    >
                        Anterior
                    </button>
                    <GetPokemonByName />
                    <button onClick={() => setOffset(offset + 20)} className="change-pokemons-list-btn">
                        Próximo
                    </button>
                </div>
                <PokemonDetails />
                <br />
                <div className="pokemons">
                    {pokemons.map((poke, index) => (
                        <div id="pokemon-list" key={index}>
                            <SinglePokemon name={poke.name} url={poke.url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
