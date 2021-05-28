import React from "react";
import Styled from "styled-components";
import CardHeader from "./CardHeader";
import CardInfo from "./CardInfo";
import { withRouter } from "react-router-dom";
import { createCardData } from "../../lib/api";

const CardWrap = Styled.div`
  width: 785px;
  height: 600px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  textarea {
    width: 642px;
    height: 219px;
    background-color: #EFEFEF;
    font-size: 18px;
    resize: none;
    font-family: Roboto;
    border: none;
    padding: 14px;
    box-sizing: border-box;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #C4C4C4;
    }
  }
`;

const Card = ({ data, rawData, year, month, match, history }) => {
  const isReadOnly = match.path === "/diary/:id" ? true : false;
  const [state, setState] = React.useState({
    title: data.title,
    weather: data.weather,
    summary: data.summary,
    text: data.text,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleEdit = () => {
    history.goBack();
  };

  const handleDelete = async () => {
    const id = parseInt(match.params.id);
    const filteredList = rawData[year][month].filter((data) => data.id !== id);
    const newData = rawData;
    newData[year][month] = filteredList;
    const data = await createCardData(newData);
    history.goBack();
  };

  return (
    <CardWrap>
      <CardHeader
        title={state.title}
        handleChange={handleChange}
        isReadOnly={isReadOnly}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <CardInfo
        data={data}
        isReadOnly={isReadOnly}
        state={state}
        handleChange={handleChange}
      />
      <textarea
        placeholder="오늘을 기록해 주세요"
        readOnly={isReadOnly}
        value={state.text}
        name="text"
        onChange={handleChange}
      />
    </CardWrap>
  );
};

export default withRouter(Card);
