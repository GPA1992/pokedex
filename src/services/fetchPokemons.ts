export async function fetchPokemonApi() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await response.json();
        return data;
    } catch (err: any) {
        console.log(err.message);
    }
}

export async function fetchSinglePokemonApiByURL(url: string) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (err: any) {
        console.log(err.message);
    }
}

export async function fetchSinglePokemonApiByName(name: string) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        return data;
    } catch (err: any) {
        console.log(err.message);
    }
}

export async function nextOrPreviousFecthPokemons(offset: string) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        const data = await response.json();
        return data;
    } catch (err: any) {
        console.log(err.message);
    }
}
