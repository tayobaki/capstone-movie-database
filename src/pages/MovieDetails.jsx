import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

function MovieDetails() {
	const { movie } = useParams();
	const { movieDetails, setMovieDetails, saveFavorite } = useStateContext();

	const endpoint = `https://www.omdbapi.com/?apiKey=${
		import.meta.env.VITE_OMDB_API_KEY
	}&t=${movie}`;

	useEffect(() => {
		async function handleMovieDetails() {
			const res = await axios.get(endpoint);
			const data = res.data;
			setMovieDetails(data);
		}
		handleMovieDetails();
	}, [movie]);

	return (
		<div className="bg-[#1E2129] min-h-screen">
			<div className="w-full h-[calc(100vh-129px)] relative">
				<div className=" text-center text-white text-3xl font-semibold mt-9">
					{movieDetails?.Error}
				</div>

				{movieDetails?.Response === "True" && (
					<>
						<div className="absolute z-10 inset-0">
							<img
								src={movieDetails?.Poster}
								alt=""
								className="h-full w-screen object-cover grayscale brightness-[.3] shadow-lg"
							/>
						</div>
						<div className="flex md:flex-row flex-col text-white/80 z-50 p-10 items-start gap-2 relative">
							<img
								src={movieDetails?.Poster}
								alt={movieDetails?.imdbID}
								className="w-[180px] h-[266px]"
							/>
							<div className="flex flex-col md:w-[590px] gap-5 mt-2">
								<h1 className="text-3xl font-black">{movieDetails?.Title}</h1>
								<div className="flex flex-col gap-1">
									<h1 className="text-base font-black">Plot Summary:</h1>
									<p className="text-base font-thin">{movieDetails?.Plot}</p>
									<div className="flex items-center gap-1 font-black">
										Casts: <p className="font-thin">{movieDetails?.Writer}</p>
									</div>
									<div className="flex items-center font-black gap-1">
										Ratings:{" "}
										<p className="font-thin">{movieDetails?.imdbRating}</p>
									</div>
									<div className="flex items-center font-black gap-1">
										Genre: <p className="font-thin">{movieDetails?.Genre}</p>
									</div>
									<button
										onClick={() => saveFavorite(movieDetails)}
										className="bg-zinc-500 px-6 py-2 w-fit"
									>
										Save to favorites
									</button>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default MovieDetails;
