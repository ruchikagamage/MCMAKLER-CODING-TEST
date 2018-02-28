import ListType from "./../types/houseList";

export function getHouseList() {
  return dispatch => {
    dispatch({
      type: ListType.FETCHING_HOUSE_LIST,
      payload: true
    });
    return fetchHouseList().then(([response, json]) => {
      if (response.status === 200) {
        dispatch({
          type: ListType.HOUSE_LIST,
          payload: json.data
        });
      } else {
        dispatch({
          type: ListType.HOUSE_LIST_ERROR,
          payload: "ERROR"
        });
      }
    });
  };
}

function fetchHouseList() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const URL = "https://api.mcmakler.de/v1/advertisements";
  return fetch(proxyurl + URL, { method: "GET" }).then(response =>
    Promise.all([response, response.json()])
  );
}
