import React, { useState } from 'react';
import Counter from './components/counter';
import Search from './components/search';
import './index.css';
import './components/Header/header.css';
import MoviesList from './components/Movies/MovieList';
import SortAndGenreControl from './components/SortAndGenreControl/SortAndGenreControl';
import Dialog from './components/Dialog'; 
import MovieForm from './components/MovieForm'; 
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentSort, setCurrentSort] = useState('releaseDate');

  const [movieData, setMovieData] = useState({ name: "", year: 0, pictureURL: "", runtime: "" ,overview:""}); // Add state to manage movie data

  const handleSearch = (query) => { 
    //alert(`Searching for: ${query}`);
  };

  const handleMovieFormSubmit = (data) => {
    closeDialog();
    //alert(`Submiting data: ${data}`);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    //alert(`Selected genre: ${genre}`);
  };

  const handleSortChange = (sortOption) => {
    setCurrentSort(sortOption);
   // alert(`Sorted By: ${sortOption}`);
  };

  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="div-container">
      <button className="add-movie-button" onClick={openDialog}>Add Movie</button>
      {isDialogOpen && (
        <Dialog title="ADD MOVIE" onClose={closeDialog}>
          <MovieForm initialMovie={movieData} onSubmit={(data) => handleMovieFormSubmit(data)} />
        </Dialog>
      )}     
      <Counter initialValue={10} />
      <Search initialSearchQuery="What do you want to watch?" onSearch={handleSearch} />
      <SortAndGenreControl
        genres={['All', 'Documentary', 'Comedy', 'Horror', 'Crime', 'Action']}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
        currentSort={currentSort}
        onSortChange={handleSortChange}
      />
      <br />
      <MoviesList onMovieEdit={openDialog} /> {/* Pass the openDialog function to the MoviesList */}
      <br />
    </div>
  );
}

export default App;