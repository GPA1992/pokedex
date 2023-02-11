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
        <main className="list-btn">
            <section>
                <PokemonDetails />
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

                <div id="list-bnt" className="btn-box-small-width">
                    <GetPokemonByName />
                    <div className="small-width-btn">
                        <button
                            disabled={offset === 0}
                            onClick={() => setOffset(offset - 20)}
                            className="change-pokemons-list-btn"
                        >
                            Anterior
                        </button>
                        <button onClick={() => setOffset(offset + 20)} className="change-pokemons-list-btn">
                            Próximo
                        </button>
                    </div>
                </div>

                <br />
                <div className="pokemons">
                    {pokemons.map((poke, index) => (
                        <div id="pokemon-list" key={index}>
                            <SinglePokemon name={poke.name} url={poke.url} />
                        </div>
                    ))}
                </div>
                <div className="btn-box-small-width">
                    <div className="small-width-btn">
                        <a href="#list-bnt">
                            <button
                                disabled={offset === 0}
                                onClick={() => setOffset(offset - 20)}
                                className="change-pokemons-list-btn"
                            >
                                Anterior
                            </button>
                        </a>
                        <a href="#list-bnt">
                            <button onClick={() => setOffset(offset + 20)} className="change-pokemons-list-btn">
                                Próximo
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
