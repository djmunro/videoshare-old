import React from "react";
import { Link } from "react-router-dom";

const Subject = ({ subject, handleDeleteSubject }) => {
  return (
    <li>
      <Link to={`/subject/${subject}`}>{subject.replace(/-/g, " ")}</Link>
      <button onClick={() => handleDeleteSubject(subject)}>Delete</button>
    </li>
  );
};
export default Subject;
