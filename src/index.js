import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/rootReducer';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

const store = createStore(
  rootReducer, applyMiddleware(thunk)
)

root.render(
  <Provider store={store}>
  <App />
  </Provider>);

