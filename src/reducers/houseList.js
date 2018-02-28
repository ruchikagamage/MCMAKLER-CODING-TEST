import ListType from "./../types/houseList";

var initialState = {
  action: false,
  fetching: false,
  houses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ListType.HOUSE_LIST:
      return {
        ...state,
        fetching: false,
        houses: action.payload.slice(0, 10),
        action: ListType.HOUSE_LIST
      };
    case ListType.HOUSE_LIST_ERROR:
      return {
        ...state,
        fetching: false,
        houses: action.payload,
        action: ListType.HOUSE_LIST_ERROR
      };
    case ListType.FETCHING_HOUSE_LIST:
      return {
        ...state,
        fetching: action.payload,
        houses: [],
        action: ListType.FETCHING_HOUSE_LIST
      };
    default:
      return state;
  }
  //   return state;
}
