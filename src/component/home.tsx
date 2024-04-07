import React from 'react';
import { Novatrix } from 'uvcanvas';

export default function Home() {
    console.log('Home component rendered');
    return (
      <div className='home-container'>
        <Novatrix />
      </div>
    )
  }