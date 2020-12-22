import React, {useState} from 'react'
import MovieCard from "./moviecard";


export default function SearchMovies(){

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);

    const SearchMovies = async (e) => {
        e.preventDefault()
        if (query===''){
            alert("Tuscias langas")
        } else {
            setQuery('')
        }


        const url = `http://www.omdbapi.com/?s=${query}&apikey=87c07ec5`


        const res = await fetch(url);
        const data = await res.json();
        console.log(data)
        setMovies(data.Search)
    }
        return (
            <>
                <form className="form" onSubmit={SearchMovies}>
                    <label className="tekstas" htmlFor="query">Filmu narsykle: </label>
                    <input className='ivedimas' type="text" name="query"
                           placeholder="Filmo pavadinimas"
                           value={query} onChange={(e) => setQuery(e.target.value)}
                    />
                    <button variant="primary" className="mygtukas" type="submit">Ieskoti</button>
                </form>
                <div className="card-list">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id}/>
                    ))}
                </div>
            </>
        )

    }