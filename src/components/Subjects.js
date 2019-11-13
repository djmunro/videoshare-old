import React, { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import styled from "@emotion/styled";

import { db } from "../firebase";
import Subject from "./Subject";

const Container = styled.div``;

const SubjectsContainer = styled.div``;

const Subjects = () => {
  const subject = React.createRef();
  const [subjectFilter, setSubjectFilter] = useState("");

  const [subjects, loading, error] = useCollection(db.collection("videos"), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  const handleSubjectSubmit = event => {
    // handle subject validation
    const slug = subject.current.value;
    db.collection("videos")
      .doc(slug.replace(/ /g, "-"))
      .set({
        links: []
      })
      .then((subject.current.value = ""));

    event.preventDefault();
  };

  const handleDeleteSubject = subject => {
    db.collection("videos")
      .doc(subject)
      .delete();
  };

  const handleSubjectFilterChange = event => {
    setSubjectFilter(event.target.value);
    event.preventDefault();
  };

  // how to get subjectFIlter to use uncontrolled input
  // but still be able to filter
  return (
    <Container>
      <h2>Subjects</h2>
      <form onSubmit={handleSubjectSubmit}>
        <input type="text" ref={subject} />
        <button>Add Subject</button>
      </form>
      <input
        value={subjectFilter}
        onChange={handleSubjectFilterChange}
        placeholder="Enter Subject..."
      />
      <SubjectsContainer>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        <ul>
          {subjects &&
            subjects.docs
              .filter(subject => subject.id.includes(subjectFilter))
              .map(subject => (
                <Subject
                  key={subject.id}
                  subject={subject.id}
                  handleDeleteSubject={handleDeleteSubject}
                />
              ))}
        </ul>
      </SubjectsContainer>
    </Container>
  );
};
export default Subjects;
