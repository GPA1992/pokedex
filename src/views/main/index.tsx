import React from 'react';
import GetPokemonByName from '../../components/getPokemonByName';
import catchall from '../../assets/CATCHALL.png';
import Header from '../../components/header';
import GetPokemonList from '../../components/getPokemonList';
import './main.styles.sass';
import PokemonDetails from '../../components/pokemonDetails';

function Main() {
    return (
        <div className="container-main">
            <Header />
            <main>
                <div id="list">
                    <GetPokemonList />
                </div>
                <div id="detail">
                    <div>
                        <GetPokemonByName />
                    </div>
                    <div>
                        <PokemonDetails />
                    </div>

                    <div id="poke-div">
                        <img id="catchall-img" src={catchall} alt="" />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Main;
