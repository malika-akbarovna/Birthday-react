import React from 'react';

import { useState } from 'react';
import './App.css';
import Review from './components/Review';
import data from "./data"

function App() {
  const [people, setPeople] = React.useState(data)
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className="underline"></div>
        </div>
        <Review people={people} />
      </section>
    </main>
  );
}

export default App;
