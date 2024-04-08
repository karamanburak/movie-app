import  axios  from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext()

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${API_KEY}`

const MovieContextProvider = ({children}) => {
    const [movies,setMovies] = useState([])
    const [loading,setLoading] = useState(false)

    const getMovies = async (apiurl) => {
        setLoading(true)
        try {
            const {data} = await axios.get(apiurl)
            console.log(data);
            setMovies(data.results)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }

    useEffect (()=>{
        getMovies(url)
    },[])

    const values = {getMovies,movies,loading}

    return <MovieContext.Provider value={values}>{children}</MovieContext.Provider>

}

export const useMovieContext = () =>{
    return useContext(MovieContext)
}

export default MovieContextProvider