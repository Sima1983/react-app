import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './game';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Player /> */}
    <Game/>
    {/* <RoundResult /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
