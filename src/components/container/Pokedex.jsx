import React from 'react';
import PokeView from './PokeView';

const Pokedex = () => {
    return (
      <div className="border border-secondary rounded m-4">
        <h1 className="pt-3 font-weight-bold text-info">DUELO A MUERTE A CUCHILLO</h1>

        <PokeView></PokeView>
      </div>
    );
}

export default Pokedex;
