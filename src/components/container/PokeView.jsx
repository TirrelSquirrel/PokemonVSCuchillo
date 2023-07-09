import React from "react";
import PokeComponent from "../pure/PokeComponent";
import { useState, useEffect } from "react";

const PokeView = () => {
  const minID = 1;
  const maxID = 811;

  const [pokeId, setPokeId] = useState(0);
  const [winable, setWinable] = useState([]);
  const [defeated, setDefeated] = useState([]);
  const [fighted, setFighted] = useState([]);

  const [revancha, setRevancha] = useState(false);

  useEffect(() => {
    getRandomPoke();
  }, []);

  const getRandomPoke = () => {
    let ranPoke = Math.floor(Math.random() * (minID, maxID));

    for (let i = 0; i < fighted.length; i++) {
      if (ranPoke === fighted[i]) {
        console.log("Pokemon repetido: " + ranPoke);
        // getRandomPoke();
        changeRevancha();
      }
    }
    setPokeId(ranPoke);
  };

  // TODO SI LE HE GANADO BUSCA VENGANZA
  // TODO SI ME HA GANADO QUIERE DARME UNA SEGUNDA OPORTUNIDAD

  const changeRevancha = () => {
    setRevancha(!revancha);
  };
  const win = (id) => {
    setWinable([...winable, id]);
    newFight();
  };

  const defeat = (id) => {
    setDefeated([...defeated, id]);
    newFight();
  };

  const newFight = () => {
    setFighted([...fighted, pokeId]);
    getRandomPoke();
    if (revancha) changeRevancha();
  };

  return (
    <div>
      <div className="container">
        <PokeComponent
          id={pokeId}
          winFunc={win}
          defeatFunc={defeat}
          revanchaBool={revancha}
        ></PokeComponent>
      </div>
      <div className="container">
        {fighted.length !== 0 && (
          <div className="container">
            <div className="container">
              <table className="table">
                <thead>
                  <tr>
                    <th className="col text-light">Ganadas</th>
                    <th className="col text-light">Perdidas</th>
                    <th className="col text-light">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-light">{winable.length}</td>
                    <td className="text-light">{defeated.length}</td>
                    <td className="text-light">
                      {winable.length - defeated.length}
                    </td>
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
