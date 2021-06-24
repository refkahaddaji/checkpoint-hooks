import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import NavigationBar from './components/NavigationBar'


function App() {

	const [movies, setMovies] = useState([
		
		{
			title: "Toy Story 4",
			description: "Description du film",
			posterUrl: "https://www.joblo.com/assets/images/joblo/posters/2019/02/Dyow9RgX4AElAGN.jpg" ,
			rate:"1"
		},
		{
			title: "Captain Marvel",
			description: "Description du film",
			posterUrl: "https://www.joblo.com/assets/images/joblo/posters/2019/02/captin-marvel-poster-international.jpg" ,
			rate:"5"
		},
		{
			title: "Spider-Man: Far From Home",
			description: "Description du film",
			posterUrl: "https://www.joblo.com/assets/images/joblo/posters/2019/01/Spider-Man-Far-From-Home-poster-1.jpg" ,
			rate:"4"
		},	
		{
			title: "Alita: Battle Angel",
			description: "Description du film",
			posterUrl: "https://www.joblo.com/assets/images/joblo/posters/2019/01/Alita-character-poster-1.jpg" ,
			rate:"2"
		},	
		{
			title: "Spider-Man: Into the Spider-Verse",
			description: "Description du film",
			posterUrl: "https://www.joblo.com/assets/images/joblo/posters/2018/11/Spider-Verse-poster-1.jpg" ,
			rate:"3"
		},
		{
		title: "Star Wars: Episode IV - A New Hope",
		description: "1977",
		posterUrl : "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		rate:"3"
	},
	{
		title: "Star Wars: Episode V - The Empire Strikes Back",
		description: "1980",
		posterUrl: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
		rate: "5",
	}
	
	]);

    const [search, setSearch] = useState("");
	const [searchStarsValue, setSearchStarsValue] = useState("");
	
	const handleSearchChange=(value)=>{
		setSearch(value)
		
	}

	const handleFilterRatingChanged=(newRating) => {
		setSearchStarsValue(newRating)
	};
	
	const handleAddMovie = (newMovie) => {
		setMovies([...movies,newMovie])
	}


    return (

	<>
 <div className='row grid'>
					<NavigationBar 
					handleSearchChange={handleSearchChange} 
					movies={movies}
					handleFilterRatingChanged={handleFilterRatingChanged}
					handleAddMovie={handleAddMovie}
					/>

			</div>
		<div className=' container-fluid movie-app'>

			<div className='row '>
			<MovieList
					movies={movies}
					search={search}
					searchStarsValue={searchStarsValue}
				/>
			</div>
			
		
		</div>
	</>

    );
}

export default App;
