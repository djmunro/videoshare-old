import React, { useState } from "react";

import Subjects from "./components/Subjects";
import Videos from "./components/Videos";

function App() {
  const [subject, setSubject] = useState(null);

  const navigateBack = () => {
    setSubject(null);
  };

  const navigateSubject = subject => {
    setSubject(subject);
  };

  return (
    <>
      <h1>Videoshare</h1>
      {subject && <Videos subject={subject} navigateBack={navigateBack} />}
      {!subject && <Subjects navigateSubject={navigateSubject} />}
    </>
  );
}

export default App;
