import { combineReducers } from 'redux';
import repositoryReducer from './repositoryReducer';

export default combineReducers({
    repository: repositoryReducer
});
