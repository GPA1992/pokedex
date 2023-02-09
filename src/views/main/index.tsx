import React from 'react';
import GetPokemonWhitRedux from '../../components/getPokemonWhitRedux';
import GetPokemonList from '../../components/getPokemonList';
import styles from './styles.module.scss';

function Main() {
    return (
        <div className={styles.container}>
            <GetPokemonWhitRedux />
            <GetPokemonList />
        </div>
    );
}

export default Main;
