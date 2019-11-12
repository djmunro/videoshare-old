import React from "react";

const Subject = ({ subject, gotoVideos, handleDeleteSubject }) => {
  return (
    <li>
      <span onClick={() => gotoVideos(subject)}>{subject}</span>
      <button onClick={() => handleDeleteSubject(subject)}>Delete</button>
    </li>
  );
};
export default Subject;
