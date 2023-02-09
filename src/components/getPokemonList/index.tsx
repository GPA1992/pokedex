import { log } from 'console';
import React, { useEffect, useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { nextOrPreviousFecthPokemons } from '../../services/fetchPokemons';
import SinglePokemon from '../singlePokemon';
import './pokemonList.styles.sass';

export default function GetPokemonList() {
    const { pokemons, setPokemons } = useGlobalContext();
    const [offset, setOffset] = useState<number>(0);
    const [disable, setDisable] = useState<boolean>(false);

    useEffect(() => {
        async function fetchPokemons() {
            const data = await nextOrPreviousFecthPokemons(offset.toString());
            setPokemons(data.results);
        }
        fetchPokemons();
    }, [offset]);

    return (
        <div className="list-btn">
            <div className="next-previous-btn">
                <button disabled={offset === 0} onClick={() => setOffset(offset - 20)} className="change-pokemons-list">
                    Previous
                </button>
                <button onClick={() => setOffset(offset + 20)} className="change-pokemons-list">
                    Next
                </button>
            </div>
            <br />
            <br />
            <div className="pokemons">
                {pokemons.map((poke, index) => {
                    return (
                        <div id="pokemon-list" key={index}>
                            <SinglePokemon name={poke.name} url={poke.url} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
