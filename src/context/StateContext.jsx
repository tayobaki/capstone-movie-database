import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext(null);

export const StateContext = ({ children }) => {
	const [movieDetails, setMovieDetails] = useState([]);

	const saveFavorite = (movie) => {
		const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

		const isAlreadyFavorite = favorites.some(
			(fav) => fav.imdbID === movie.imdbID
		);

		if (!isAlreadyFavorite) {
			favorites.push(movie);
			localStorage.setItem("favoriteMovies", JSON.stringify(favorites));
		} else {
			alert(`${movie.Title} is already in favorites!`);
		}
	};

	return (
		<Context.Provider
			value={{
				movieDetails,
				setMovieDetails,
				saveFavorite,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context);
