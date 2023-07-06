import React from "react";
import PokeComponent from "../pure/PokeComponent";
import { useState, useEffect } from "react";
import { getGenOne } from "../../services/axiosService";

const PokeView = () => {
  const minID = 1;
  const maxID = 811;

  const [pokeId, setPokeId] = useState(1);
  const [winable, setWinable] = useState([]);
  const [defeated, setDefeated] = useState([]);
  const [fighted, setFighted] = useState([]);

  useEffect(() => {
    getGenOne()
      .then((response) => {
        // console.log(genOne);
      })
      .catch((error) => console.log(error));
    // .finally(() => console.log("Peticion finalizada"));
  }, []);

  const win = (id) => {
    setWinable([...winable, id]);
    console.log(winable);
    newFight();
  };

  const defeat = (id) => {
    setDefeated([...defeated, id]);
    console.log(defeated);
    newFight();
  };

  const newFight = () => {
    setFighted([...fighted, pokeId]);
    let ranPoke = Math.floor(Math.random() * (minID, maxID));

    for (let i = 0; i < fighted.length; i++) {
      if (ranPoke === fighted[i]) {
        newFight();
      }
    }
    setPokeId(ranPoke);
    console.log(ranPoke);
  };

  return (
    <div>
      <div className="container">
        <PokeComponent
          id={pokeId}
          winFunc={win}
          defeatFunc={defeat}
        ></PokeComponent>
      </div>
      <div>
        {fighted.length != 0 && (
          <button>Score</button>
        )}
      </div>
    </div>
  );
};

export default PokeView;
