import React from 'react';
import {GlobalStyle} from './GlobalStyle';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Movie from './components/Movie'
import Notfound from './components/Notfound'

const App = () => (

    <Router>
      <Header/>
      <Routes>
        <Route path= '/' element = {<Home/>} />
        <Route path = '/:movieId' element = {<Movie/>} />
        <Route path ='/*' element = {<Notfound/>} />
      </Routes>
      <GlobalStyle/>
    </Router>
  
)

export default App;
