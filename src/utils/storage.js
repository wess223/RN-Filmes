import AsyncStorage from '@react-native-async-storage/async-storage'


//Buscar filmes salvos

export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || [];

    return moviesSave;
}

//salvar um novo filme

export async function saveMovie(key, newMovie) {
    let moviesStored = await getMoviesSave(key);

    //se tiver algum filme salvo com esse mesmo ID / ou duplicado precisamos ignorar.
    const hasMovie = moviesStored.some(item => item.id === newMovie.id);

    if (hasMovie) {
        console.log('Esse filme já existe na sua lista.');
        return;
    }

    moviesStored.push(newMovie)

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
    console.log("FILME SALVO COM SUCESSO!");
}

//deletar um  filme especifico
export async function deleteMovie(id) {
    let moviesStored = await getMoviesSave('@filmesreact');

    let myMovies = moviesStored.filter(item => {
        return (item !== id)
    })

    await AsyncStorage.setItem('@filmesreact', JSON.stringify(myMovies))
    console.log("FILME DELETADO COM SUCESSO!")

    return myMovies;
}

//filtrar algum filme se já salvo.

export async function hasMovie(movie) {
    let moviesStored = await getMoviesSave('@filmesreact');

    const hasMovie = moviesStored.find(item => item.id === movie.id);

    if (hasMovie) {
        return true;
    }
    return false;
}