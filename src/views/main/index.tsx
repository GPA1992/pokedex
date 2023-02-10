import React from 'react';
import GetPokemonByName from '../../components/getPokemonByName';
import paisagem from '../../assets/PAISAGEM2.jpg';
import pokebola from '../../assets/POKEBOLA.png';
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
                        <img id="pokebola-img" src={pokebola} alt="" />
                        <h3>Gotta Catch ‘Em All!</h3>
                    </div>
                </div>
            </main>
            <img id="paisagem" src={paisagem} alt="" />
        </div>
    );
}

export default Main;
