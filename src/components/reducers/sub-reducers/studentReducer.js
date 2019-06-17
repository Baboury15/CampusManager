import { DELETE_BY_ID } from '../index';
import axios from 'axios';

////////////// action types

const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_STUDENT_BY_ID = 'GET_STUDENT_BY_ID';
const ADD_STUDENT = 'ADD_STUDENT';

////////////// action creators

const gotStudents = students => ({
  type: GET_ALL_STUDENTS,
  students
});

const gotSingleStudent = singleStudent => ({
  type: GET_STUDENT_BY_ID,
  singleStudent
});

const addedStudent = newStudent => ({
  type: ADD_STUDENT,
  newStudent
});

////////////// thuuuuunk
const address = '/api/students';

export const gettingAllStudents = () => async dispatch => {
  const { data } = await axios.get(address);
  dispatch(gotStudents(data));
};

export const gettingSingleStudent = id => async dispatch => {
  const { data } = await axios.get(`/api/students/${id}`);
  dispatch(gotSingleStudent(data));
};

export const addingNewStudent = newStudent => async dispatch => {
  const { data } = await axios.post(address, newStudent);
  dispatch(addedStudent(data));
};

const initialState = {
  students: [],
  singleStudent: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_STUDENTS:
      return { ...state, students: [...action.students] };
    case GET_STUDENT_BY_ID:
      return { ...state, singleStudent: action.singleStudent };
    case ADD_STUDENT:
      return { ...state, students: [...state.students, action.newStudent] };
    case DELETE_BY_ID:
      if (action.objRef === 'students') {
        const oldStudents = [...state.students];
        const newStudents = oldStudents.filter(
          student => student.id !== action.id
        );
        return { ...state, students: newStudents };
      } else {
        return state;
      }
    default:
      return state;
  }
};
