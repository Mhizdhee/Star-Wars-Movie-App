import React from 'react'
import ReactDOM from 'react-dom/client'
import MovieApp from './components/MovieApp';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieApp />
    </BrowserRouter>
  </React.StrictMode>,
)
