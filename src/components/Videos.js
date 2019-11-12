import React from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styled from "@emotion/styled";

import { db } from "../firebase";
import YouTube from "./YouTube";

const VideosContainer = styled.div``;

const Videos = ({ subject, navigateBack }) => {
  const link = React.useRef();
  const [videos, loading, error] = useDocument(db.doc(`videos/${subject}`), {
    snapshotListenOptions: { includeMetadataChanges: true }
  });

  const handleOnSubmit = event => {
    // handle validation here
    const url = link.current.value;
    if (url === "") return;

    const links = videos.data().links;

    db.collection("videos")
      .doc(subject)
      .update({
        links: [url, ...links]
      });

    event.preventDefault();
  };

  return (
    <>
      <button onClick={navigateBack}>Back to subjects</button>
      <h2>{`${subject} videos`}</h2>
      <form onSubmit={handleOnSubmit}>
        <input ref={link} />
        <button>Add Video</button>
      </form>
      <VideosContainer>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Loading...</span>}
        {videos &&
          videos.data().links.map(link => <YouTube key={link} link={link} />)}
      </VideosContainer>
    </>
  );
};
export default Videos;
