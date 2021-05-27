import React from "react";
import Styled from "styled-components";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import { withRouter } from "react-router-dom";

const CardWrap = Styled.div`
  width: 785px;
  height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
`;

const Card = ({ data, match }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const { title, text, ...rest } = data;

  return (
    <CardWrap>
      <CardHeader title={title} isReadOnly={isReadOnly} />
      <CardInfo data={rest} isReadOnly={isReadOnly} />
      <p>{text}</p>
    </CardWrap>
  );
};

export default withRouter(Card);
