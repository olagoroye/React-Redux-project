import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {BrowserRouter as Router } from 'react-router-dom'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import * as serviceWorker from './serviceWorker';
import bottles from './reducers/bottles'
import bottleFormData from './reducers/bottleFormData'
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({ bottles, bottleFormData})
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(thunk)
  ));

ReactDOM.render(
 
  <React.StrictMode>
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
