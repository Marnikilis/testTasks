import axios from "axios";


export const getCurUSD = () => {
  return async (dispatch) => {
    await axios.get('https://api.exchangerate.host/convert?from=USD&to=UAH')
      .then(response => {
        dispatch({type: 'GET_USD', payload: response.data.result.toFixed(3)})
        console.log(response.data.result);
      })
      .catch((err) => {
        dispatch({type:'ERROR', payload: true})
      })
  }
};

export const getCurEUR = () => {
  return async (dispatch) => {
    await axios.get('https://api.exchangerate.host/convert?from=EUR&to=UAH')
      .then(response => {
        dispatch({type: 'GET_EUR', payload: response.data.result.toFixed(3)})
        console.log(response.data.result);
      })
      .catch((err) => {
        dispatch({type:'ERROR', payload: true})
      })
  }
};

export const getCurPLN = () => {
  return async (dispatch) => {
    await axios.get('https://api.exchangerate.host/convert?from=PLN&to=UAH')
      .then(response => {
        dispatch({type: 'GET_PLN', payload: response.data.result.toFixed(3)})
        console.log(response.data.result);
      })
      .catch((err) => {
        dispatch({type:'ERROR', payload: true})
      })
  }
};
