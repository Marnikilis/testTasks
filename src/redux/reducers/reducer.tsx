const initialState = {
    usd: 0,
    eur:0,
    pln: 0,
    isFetchError:false
}

export const reducer= (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USD':
      return {
        ...state,
       usd: action.payload
      };
      case 'GET_EUR':
      return {
        ...state,
       eur: action.payload
      };
      case 'GET_PLN':
      return {
        ...state,
       pln: action.payload
      };
      case 'ERROR':
      return {
        ...state,
       isFetchError: action.payload
      };
    default:
      return state;
  }
}