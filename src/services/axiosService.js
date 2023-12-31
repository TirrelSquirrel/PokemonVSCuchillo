import APIRequest from "../utils/config/axios.config";

export function getPokemon(id) {
  return APIRequest.get("pokemon/" + id, {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
