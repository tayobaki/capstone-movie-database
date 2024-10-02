import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../components/Nav.jsx";
import MovieCard from "../components/MovieCard.jsx";
import SearchBar from "../components/SearchBar.jsx";

function HomePage() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [page, setPage] = useState(1);

	const endpoint = `http://www.omdbapi.com/?apiKey=${
		import.meta.env.VITE_OMDB_API_KEY
	}&s=${query}&Page=${page}`;

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await axios.get(endpoint);
			setData(res.data.Search);
			setError(res.data.Error);
		} catch (error) {
			console.error("error", error?.response?.data?.Error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	const handleSearch = async (e) => {
		e.preventDefault();
		setPage(1);
		fetchData();
	};
	console.log(error);

	return (
		<div className="text-white">
			<SearchBar
				handleSearch={handleSearch}
				query={query}
				setQuery={setQuery}
			/>

			{error && (
				<div className=" text-xl font-semibold mt-4 text-center">{error}</div>
			)}

			{data?.length > 1 && (
				<div className="flex items-center gap-6 w-full mt-8 max-w-5xl  mx-auto text-center justify-center">
					<button
						disabled={page <= 1}
						className="w-16 h-10 p-2 flex items-center justify-center rounded-md border border-black/20"
						onClick={() => setPage(page - 1)}
					>
						Prev
					</button>
					<button
						disabled={page >= 10}
						className="w-16 h-10 p-2 flex items-center justify-center rounded-md border border-black/20"
						onClick={() => setPage(page + 1)}
					>
						Next
					</button>
				</div>
			)}

			{loading && (
				<div className="flex items-center justify-center h-[calc(100vh-56px)]">
					<div className="loader border-t-2 rounded-full border-gray-500 bg-gray-300 animate-spin aspect-square w-8"></div>
				</div>
			)}

			<div className=" grid xl:grid-cols-7  py-10 grid-cols-3 md:grid-cols-6 max-w-6xl mx-auto gap-x-2 gap-y-4 px-5 xl:px-0">
				{data?.map((movie) => (
					<MovieCard key={movie.imdbID} movie={movie} />
				))}
			</div>
		</div>
	);
}

export default HomePage;
