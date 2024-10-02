import search from "/search.svg";

function SearchBar({ handleSearch, query, setQuery }) {
	return (
		<form onSubmit={handleSearch}>
			<div className="flex items-center md:-translate-y-1/2 mt-3 md:m-0 justify-center">
				<div className="flex items-center gap-1">
					<input
						type="text"
						value={query}
						onChange={(e) => setQuery(e.target.value)}
						placeholder="Search for movies and tv shows"
						className=" text-black shadow-md rounded-full pl-2 md:pl-6 w-[200px] md:w-[550px] md:h-14 h-9 border mx-auto "
					/>
					<button
						type="submit"
						className=" right-28 size-9 md:size-14 flex items-center justify-center p-2 bg-blue-500 rounded-full col-start-2"
					>
						<img src={search} alt="search" />
					</button>
				</div>
			</div>
		</form>
	);
}

export default SearchBar;
