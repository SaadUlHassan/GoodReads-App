import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
// import combineReducer from './redux/combinereducer'
import booksfetch from './redux/reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer  from './redux/combinereducer';


const store = createStore(
  rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={store}><App /></Provider> 
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
