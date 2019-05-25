import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import projectTaskReducer from './projectTaskReducer';
import securityReducer from './securityReducer';

export default combineReducers ({
    errors: errorsReducer,
    project_task: projectTaskReducer,
    security: securityReducer
});