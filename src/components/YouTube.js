import React from "react";
import url from "url";
import styled from "@emotion/styled";

const StyledContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`;

const StyledIFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

function getIdFromLink(link) {
  const queryParams = url.parse(link).query;
  const urlParams = new URLSearchParams(queryParams);
  return urlParams.get("v");
}

const YouTube = ({ link }) => {
  const id = getIdFromLink(link);

  return (
    <StyledContainer>
      <StyledIFrame
        title="video"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </StyledContainer>
  );
};
export default YouTube;
