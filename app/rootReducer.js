/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { routeReducer } from './routeReducer';
import globalReducer from 'App/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    global: globalReducer,
    ...asyncReducers,
  });
}
