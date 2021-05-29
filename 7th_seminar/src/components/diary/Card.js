import React from "react";
import Styled from "styled-components";
import { withRouter } from "react-router-dom";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";

const CardWrap = Styled.div`
  width: 785px;
  height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
`;

const Card = ({ data, match }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const [state, setState] = React.useState(data);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <CardWrap>
      <CardHeader
        title={state.title}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
      />
      <CardInfo
        data={state}
        isReadOnly={isReadOnly}
        handleChange={handleChange}
      />
      <p>{state.text}</p>
    </CardWrap>
  );
};

export default withRouter(Card);
