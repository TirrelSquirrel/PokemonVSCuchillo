import React from "react";
import { useEffect, useState } from "react";
import { getPokemon } from "../../services/axiosService";

const PokeComponent = ({
  id,
  winFunc,
  defeatFunc,
  revanchaBool,
}) => {
  const [pokeName, setPokeName] = useState(null);

  useEffect(() => {
    getPokemon(id)
      .then((response) => {
        // console.log(response.data);
        // console.log(response.data.abilities);
        setPokeName(response.data.forms[0].name);
      })
      .catch((error) => console.log("Buscando pokemon"));
    // .finally(() => console.log("Peticion finalizada"));
  }, [id]);

  return (
    <div className="py-3">
      {pokeName != null ? (
        <div>
          <h2 className="pt-3 font-weight-bold">
            ¿Ganarías a{" "}
            <span style={{ textTransform: "capitalize" }}>{pokeName}</span>?
          </h2>
          {revanchaBool ? <h2 className="text-danger">Ahora viene en busca de venganza</h2> : null}
          <img
            style={{ width: "150px" }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={pokeName}
          ></img>
          <div className="container">
            <button
              className="btn btn-primary mx-2"
              onClick={() => winFunc(id)}
            >
              Me lo hago
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={() => defeatFunc(id)}
            >
              Me revienta
            </button>
          </div>
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default PokeComponent;
