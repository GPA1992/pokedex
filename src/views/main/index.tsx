import React from 'react';
import Header from '../../components/header';
import GetPokemonList from '../../components/getPokemonList';
import './main.styles.sass';
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
