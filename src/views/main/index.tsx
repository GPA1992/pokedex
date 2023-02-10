import React from 'react';
import GetPokemonByName from '../../components/getPokemonByName';
import paisagem from '../../assets/PAISAGEM2.jpg';
import Header from '../../components/header';
import GetPokemonList from '../../components/getPokemonList';
import './main.styles.sass';
import PokemonDetails from '../../components/pokemonDetails';

function Main() {
    return (
        <div className="container-main">
            <Header />
            <main>
                <GetPokemonList />
                <div className="search-details">
                    <GetPokemonByName />
                    <PokemonDetails />
                </div>
            </main>
            <img id="paisagem" src={paisagem} alt="" />
        </div>
    );
}

export default Main;
