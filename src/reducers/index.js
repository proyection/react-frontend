import { combineReducers } from 'redux';
import errorsReducer from './errorsReducer';
import projectTaskReducer from './projectTaskReducer';
import listsReducer from './listsReducer';

export default combineReducers ({
    errors: errorsReducer,
    project_task: projectTaskReducer,
    lists: listsReducer
});