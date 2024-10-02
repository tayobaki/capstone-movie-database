import { Link } from "react-router-dom";

function MovieCard({ movie }) {
	return (
		<a
			href={`/movie/${encodeURIComponent(movie.Title)}`}
			className=" cursor-pointer"
		>
			<img
				src={movie.Poster}
				alt={movie.Title}
				className=" rounded-md  aspect-[4/6] object-cover"
			/>
			<div className="pl-1">
				<h1 className=" font-semibold truncate pr-2 md:pr-5 text-sm ">
					{movie.Title}
				</h1>
				<span className="text-sm">{movie.Year}</span>
			</div>
		</a>
	);
}

export default MovieCard;
