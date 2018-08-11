import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './App';

const root = document.getElementById('root');
render(<App />, root);

// Enable hot reloading
hot(module)(App);