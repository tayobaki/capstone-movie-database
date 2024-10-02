function Favorites() {
	const favorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

	return (
		<div className=" text-white px-5 py-4 flex md:flex-col flex-row flex-wrap gap-3">
			{favorites.map((fav) => (
				<a
					href={`/${fav.Type}/${fav.Title}`}
					key={fav.imdbID}
					className="flex flex-col md:flex-row items-start gap-2"
				>
					<img
						src={fav?.Poster}
						alt={fav?.Title}
						className=" aspect-[1/1] md:w-[160px] md:h-[200px] size-24 rounded-md object-cover"
					/>
					<div className=" space-y-5">
						<h1 className="md:text-lg truncate">{fav?.Title}</h1>
						<p className="md:w-[600px] w-[200px]">{fav?.Plot}</p>
					</div>
				</a>
			))}
		</div>
	);
}

export default Favorites;
