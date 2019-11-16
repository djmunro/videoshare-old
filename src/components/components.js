import styled from "@emotion/styled";

const Button = styled.button`
  transition: all 0.1s;
  &:hover {
    transition: all 0.2s;
    background-color: #606c76;
    border-color: #606c76;
    color: #fff;
    outline: 0;
  }
`;

const SuccessButton = styled(Button)`
  background-color: #3bb272;
  border-color: #3bb272;
`;

const IconButton = styled(Button)`
  background-color: transparent;
  border: none;
  font-size: 1.5em;
  height: initial;
  margin: 6;
  padding: 0;
  transition: all 0.1s;
  line-height: 1;
  position: relative;
  ::before {
    height: 0;
    width: 0;
    top: 0;
    left: 50%;
    transform: translate(-3px, 11px);
    z-index: -1;
    position: absolute;
    content: "";
    opacity: 0;
    transition: all 0.2s;
    background-color: #aaa;
    box-shadow: 0px 0px 20px 12px #aaa;
  }
  &:hover,
  &:active,
  &:focus {
    background-color: transparent;
    transform: scale(1.1);
    ::before {
      opacity: 1;
    }
  }
  :active {
    transform: scale(0.9);
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const CenteredBox = styled(Box)`
  justify-content: center;
`;

const CenteredRow = styled(Row)`
  justify-content: center;
`;

export { CenteredBox, CenteredRow, Button, SuccessButton, IconButton, Row };
