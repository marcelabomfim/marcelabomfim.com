import { combineReducers } from 'redux';

import ExampleReducer from './Example.reducer';
// import ExampleReducer from './Another.reducer';

export default combineReducers({
  exampleReducer: ExampleReducer,
  // anotherReducer: AnotherReducer
});
