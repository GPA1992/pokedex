import React from 'react';
import './header.styles.sass';
import pokedexLogo from '../../assets/POKEDEX.png';

export default function Header() {
    return (
        <header>
            <img src={pokedexLogo} alt="" />
        </header>
    );
}
