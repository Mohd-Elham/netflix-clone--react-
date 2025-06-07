import { createContext, useEffect, useState } from "react";
import { MOVIE_JSON_DATA_NOW_PLAYING, MOVIE_JSON_DATA_POPULAR } from "../config/config";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [dataNowPlaying, setDataNowPlaying] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);



    useEffect( () => {
        const movieData = async () => {
                setLoading(true);
                setError(null);
                
                const response1 = await fetch(MOVIE_JSON_DATA_POPULAR);
                const response2 = await fetch(MOVIE_JSON_DATA_NOW_PLAYING);
                
                if (!response1.ok && response2.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const jsonData = await response1.json();
                const jsonDataNowPlaying = await response2.json();
                
                // If your API returns an object with results array, extract it
                    setData(jsonData.results);
                    setDataNowPlaying(jsonDataNowPlaying.results);
                    console.log('Movie data (results): it is an object', jsonData.results[0]);
                
                setLoading(false);
        }
        movieData();
    }, [])

    return (
        <DataContext.Provider value={{data,loading,dataNowPlaying}}>
            {children}
        </DataContext.Provider>
    )
}

