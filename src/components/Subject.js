/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import { Row, IconButton } from "./components";

const Subject = ({ subject, slug, handleDeleteSubject }) => {
  return (
    <div>
      <Row
        css={css`
          justify-content: space-between;
          align-items: center;
          margin: 20px 0 20px 0;
        `}
      >
        <Link to={`/subjects/${slug}`}>{subject}</Link>
        <IconButton
          onClick={e => {
            e.target.blur();
            if (
              confirm("🚨 Hey! Are you sure you wanna delete that SUBJECT? 🚨")
            ) {
              handleDeleteSubject(slug);
            }
          }}
        >
          ❌
        </IconButton>
      </Row>
    </div>
  );
};
export default Subject;
