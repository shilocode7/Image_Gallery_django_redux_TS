import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Gallery } from './features/gallery/Gallery';
import Up from './features/gallery/Up';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Up />
        <Gallery />
      </header>
    </div>
  );
}

export default App;
