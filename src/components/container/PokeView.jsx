import React from "react";
import PokeComponent from "../pure/PokeComponent";
import { useState, useEffect } from "react";
import { getGenOne } from "../../services/axiosService";

const PokeView = () => {
  const minID = 1;
  const maxID = 811;

  const [pokeId, setPokeId] = useState(0);
  const [winable, setWinable] = useState([]);
  const [defeated, setDefeated] = useState([]);
  const [fighted, setFighted] = useState([]);

  useEffect(() => {
    getRandomPoke()
  }, []);

  const getRandomPoke = () => {
    let ranPoke = Math.floor(Math.random() * (minID, maxID));

    for (let i = 0; i < fighted.length; i++) {
      if (ranPoke === fighted[i]) {
        newFight();
      }
    }
    setPokeId(ranPoke);
    console.log(ranPoke);
  }
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
    getRandomPoke()
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
      <div className="container">
        {fighted.length != 0 && (
          <div className="container">            
            <div className="container">
              <table className="table">
                <thead>
                  <tr>
                    <th className="col">Ganadas</th>
                    <th className="col">Perdidas</th>
                    <th className="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{winable.length}</td>
                    <td>{defeated.length}</td>
                    <td>{winable.length - defeated.length}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokeView;
