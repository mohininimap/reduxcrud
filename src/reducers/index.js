// src/reducers/index.js
import { combineReducers } from 'redux';
import postReducer from './postReducer'; // Import your postReducer here

const rootReducer = combineReducers({
  posts: postReducer,
  // Add other reducers here if needed
});

export default rootReducer;
