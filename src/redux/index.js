import { combineReducers } from '@reduxjs/toolkit';
import auth from './authReducer';

export const reducer = combineReducers({
  auth
});
