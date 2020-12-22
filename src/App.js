import React from 'react'
import './App.css'
import MovieSearch from "./components/moviesearch";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
function App() {
  return (
	<Container>
    <h1 className="title">React Movie Search</h1>
    <MovieSearch/>
	</Container>
  );
}

export default App;