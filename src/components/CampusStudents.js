import React from 'react';
import { Link } from 'react-router-dom';

const CampusStudents = props => {
  const students = props.students;
  const noStudents = (students === undefined || students === null);

  return noStudents
    ? ' no students yet'
    : students.map(student => (
      <Link to={`/students/${student.id}`} key={student.id}>
        <li>{`${student.firstName} ${student.lastName}`}</li>
      </Link>
    ));
};

export default CampusStudents;
