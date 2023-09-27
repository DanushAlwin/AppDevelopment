// import { createStore } from 'redux';

// const initialState = {
//   plants: [],
// };

// const store = createStore(reducer, initialState);

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/rootReducer"; // Import your root reducer
import thunk from "redux-thunk"; // Import the Redux Thunk middleware

// Create an array containing the middleware you want to apply
const middleware = [thunk];

// Use Redux DevTools Extension to enhance debugging (if available)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store by passing the rootReducer and middleware
const store = createStore(
  rootReducer, // The root reducer that combines all other reducers
  composeEnhancers(applyMiddleware(...middleware)) // Apply middleware and DevTools extension enhancer
);

// Export the configured Redux store
export default store;