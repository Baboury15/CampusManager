/* eslint-disable no-case-declarations */
import axios from 'axios';

import { DELETE_BY_ID } from '../index';

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_CAMPUS_BY_ID = 'GET_CAMPUS_BY_ID';
const ADD_CAMPUS = 'ADD_CAMPUS';

////////////// action creators

const gotCampuses = campuses => ({
  type: GET_ALL_CAMPUSES,
  campuses
});

const gotSingleCampus = singleCampus => ({
  type: GET_CAMPUS_BY_ID,
  singleCampus
});

const addedCampus = newCampus => ({
  type: ADD_CAMPUS,
  newCampus
});

////////////// thuuuuunk
const address = '/api/campuses';

export const gettingAllCampuses = () => async dispatch => {
  const { data } = await axios.get(address);
  dispatch(gotCampuses(data));
};

export const gettingSingleCampus = id => async dispatch => {
  const { data: singleCampus } = await axios.get(`${address}/${id}`);
  const resCampus = { ...singleCampus, students: [...singleCampus.students] };
  dispatch(gotSingleCampus(resCampus));
};

export const addingNewCampus = newCampus => async dispatch => {
  const { data } = await axios.post(address, newCampus);
  dispatch(addedCampus(data));
};

const initialState = {
  campuses: [],
  singleCampus: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CAMPUSES:
      return {
        ...state,
        campuses: [...action.campuses]
      };
    case GET_CAMPUS_BY_ID:
      return { ...state, singleCampus: action.singleCampus };
    case ADD_CAMPUS:
      return { ...state, campuses: [...state.campuses, action.newCampus] };
    case DELETE_BY_ID:
      if (action.objRef === 'campuses') {
        const oldCampuses = [...state.campuses];
        const newCampuses = oldCampuses.filter(
          campus => campus.id !== action.id
        );
        return { ...state, campuses: newCampuses };
      } else {
        return state;
      }
    default:
      return state;
  }
};
