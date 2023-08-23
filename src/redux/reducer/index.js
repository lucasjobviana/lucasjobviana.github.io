import { combineReducers } from 'redux';
import project from './projectReducer';
import user from './userReducer';

const rootReducer = combineReducers({ user,project });

export default rootReducer;