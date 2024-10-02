import movie from "/movie.svg";
import favorites from "/favorites.svg";

export default function Nav() {
	const favoriteMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
	return (
		<div className=" w-full shadow-md border-b  bg-[#1E2129] border-white/20 h-[81px]  px-3 flex items-center justify-between">
			<a href="/">
				<img src={movie} alt="musicLogo" className="size-[50px] " />
			</a>
			<a href="/favorites" className="relative">
				<img src={favorites} alt="favoritesLogo" className="size-[50px] " />
				{favoriteMovies && (
					<div className="size-3 absolute top-0 -right-1 bg-blue-500 rounded-full animate-pulse duration-300" />
				)}
			</a>
		</div>
	);
}
