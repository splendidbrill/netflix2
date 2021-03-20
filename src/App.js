import React from 'react';
import './App.css';
import Row from './Row';
import Banner from './Banner';
import request from './request';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      {/* nav__bar */}
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} 
      isLargeRow/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rate" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorroMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
