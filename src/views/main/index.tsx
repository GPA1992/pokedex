import React from 'react';
import GetPokemonByName from '../../components/getPokemonByNameWhitRedux';
import paisagem from '../../assets/PAISAGEM2.jpg';
import Header from '../../components/header';
import GetPokemonList from '../../components/getPokemonList';
import './main.styles.sass';

function Main() {
    return (
        <div className="container">
            <Header />
            <main>
                <GetPokemonList />
            </main>
            <img id="paisagem" src={paisagem} alt="" />
        </div>
    );
}

export default Main;
