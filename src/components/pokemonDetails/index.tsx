import React, { useEffect, useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import { fetchSinglePokemonApiByName } from '../../services/fetchPokemons';
import { Pokemon } from '../../types/pokemon';
import './pokemonDetail.styles.sass';

export default function PokemonDetails() {
    const [pokemonDetail, setPokemonDetail] = useState<Pokemon | undefined>({} as Pokemon);
    const [isPokemoNameUndefined, setIsPokemoNameUndefined] = useState<boolean>();
    const { pokemonName } = useGlobalContext();

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const data = await fetchSinglePokemonApiByName(pokemonName);
                const pokemonNameValidate = data === undefined ? true : false;
                setIsPokemoNameUndefined(pokemonNameValidate);
                setPokemonDetail(data);
            } catch (err: any) {
                console.log(err.message);
            }
        };
        fetchPokemon();
    }, [pokemonName]);

    return (
        <div id="pokemon-detail" className="pokemon-detail">
            <div className="all-detail">
                <h3>{pokemonDetail?.name}</h3>
                {pokemonDetail?.sprites && (
                    <img
                        className="pokemon-detail-img-info"
                        src={pokemonDetail.sprites.other.home.front_default}
                        alt="pokemon-picture"
                    />
                )}

                {isPokemoNameUndefined === true ? (
                    <p>Nome invalido</p>
                ) : (
                    <div className="pokemon-statics">
                        <div id="pokemon-info">
                            <p>{`Nº: ${pokemonDetail?.id}`}</p>
                            <p>{`Altura: ${pokemonDetail?.height}`}</p>
                            <p>{`Peso: ${pokemonDetail?.weight}`}</p>
                            {pokemonDetail?.types?.map((allType, index) => (
                                <div id="types" key={index}>
                                    <p>{`Tipo ${allType.slot}: ${allType.type.name}`}</p>
                                </div>
                            ))}
                            <div className="stats">
                                {pokemonDetail?.stats?.map((allStat, index) => (
                                    <div key={index} className="stat-bar">
                                        <p>{`${allStat.stat.name}: ${allStat.base_stat}`}</p>
                                        <div
                                            style={{ width: `${allStat.base_stat * 2}px` }}
                                            className="power-bar"
                                        ></div>
                                    </div>
                                ))}
                            </div>
                            <br />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
