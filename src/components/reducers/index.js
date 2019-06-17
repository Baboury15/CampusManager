import { combineReducers } from 'redux';
import axios from 'axios';

import campusReducer from './sub-reducers/campusReducer';
import studentReducer from './sub-reducers/studentReducer';

/****** shared action types */

export const DELETE_BY_ID = 'DELETE_BY_ID';

/****** sared action creators */

const deleteById = (objRef, id) => ({
  type: DELETE_BY_ID,
  objRef,
  id
});

// shared thunk: delete by Id
export const deletingById = (objRef, id) => async dispatch => {
  try {
    await axios.delete(`/api/${objRef}/${id}`);
    dispatch(deleteById(objRef, id));
  } catch (err) {
    console.error(err);
  }
};

/****** rootReducer */
export default combineReducers({
  campuses: campusReducer,
  students: studentReducer
});
