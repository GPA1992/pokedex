import React, { useState } from 'react';
import useGlobalContext from '../../hooks/useGlobalContext';
import './getPokemonByName.styles.sass';

export default function GetPokemonByName() {
    const [searchPokemonName, setSearchPokemonName] = useState<string>('');
    const { setPokemonName } = useGlobalContext();

    return (
        <div className="pokemon-whit-name">
            <input
                placeholder="Pesquise pelo nome ou número"
                className="input-pokemon-name"
                type="text"
                onChange={({ target }) => setSearchPokemonName(target.value)}
                value={searchPokemonName}
            />
            <br />
            <button
                type="submit"
                onClick={() => {
                    setPokemonName(searchPokemonName);
                    setSearchPokemonName('');
                }}
                disabled={searchPokemonName.length === 0}
                className="search-btn"
            >
                Procurar
            </button>
        </div>
    );
}
