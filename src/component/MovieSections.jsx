import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ImageCards from "./ImageCards";

const MovieSection = () => {

    const {data, loading, dataNowPlaying} = useContext(DataContext);

    console.log(data);

     if (loading) {
        return (
            <div className="text-white p-8 bg-black">
                <h1 className="font-medium text-xl mb-4">Popular on Netflix</h1>
                <div className="flex space-x-4">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="min-w-[300px] h-[169px] bg-gray-800 rounded animate-pulse"></div>
                    ))}
                </div>
            </div>
        );
    }
    

    return (<>
        <div className="text-white p-8 bg-black ">
          <h1 className="font-medium text-xl">Popular on Netflix</h1>
          <div className="relative">
                <div 
                    className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // Internet Explorer 10+
                    }}
                >
                    {data.map((movie) => (
                        <div key={movie.id} className="flex-shrink-0">
                            <ImageCards 
                                image={movie.backdrop_path} 
                                title={movie.original_title || movie.title}
                                movie={movie}
                            />
                        </div>
                    ))}
                </div>
                
                {/* Gradient fade effects */}
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            </div>
          <h1 className="font-medium text-xl">Now Playing</h1>
          <div className="relative">
                <div 
                    className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide"
                    style={{
                        scrollbarWidth: 'none', // Firefox
                        msOverflowStyle: 'none', // Internet Explorer 10+
                    }}
                >
                    {dataNowPlaying.map((movie) => (
                        <div key={movie.id} className="flex-shrink-0">
                            <ImageCards 
                                image={movie.backdrop_path} 
                                title={movie.original_title || movie.title}
                                movie={movie}
                            />
                        </div>
                    ))}
                </div>
                
                {/* Gradient fade effects */}
                <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
                <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
            </div>
        </div>
    </>)
}

export default MovieSection;