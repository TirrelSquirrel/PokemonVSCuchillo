import APIRequest from "../utils/config/axios.config";

export function getPokemon(id) {
    return APIRequest.get('pokemon/' + id, {
        validateStatus: function(status) {
            return status < 500;
        }
    })
}

export function getGenOne() {
    return APIRequest.get("pokemon?limit=151", {
      validateStatus: function (status) {
        return status < 500;
      },
    });

}