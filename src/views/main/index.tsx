import React from 'react';
import GetPokemonByName from '../../components/getPokemonByName';
import catchall from '../../assets/CATCHALL.png';
import Header from '../../components/header';
import GetPokemonList from '../../components/getPokemonList';
import './main.styles.sass';
import PokemonDetails from '../../components/pokemonDetails';
import Footer from '../../components/footer';

function Main() {
    return (
        <div className="container-main">
            <Header />
            <GetPokemonList />
            <Footer />
        </div>
    );
}

export default Main;
