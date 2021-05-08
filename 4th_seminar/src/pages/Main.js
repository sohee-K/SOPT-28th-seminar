import React from "react";
import Card from "../components/main/Card";
import Styled from "styled-components";

const MainWrap = Styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  row-gap: 25px;
`;

const Main = () => {
  const [userData, setUserData] = React.useState({
    id: 1,
    date: 20210501,
    title: "다이어리 제목 어쩌고 저쩌고",
    image: "",
    weather: "맑음",
    tags: ["태그1", "태그2"],
  });

  return (
    <MainWrap>
      <Card props={userData} />;
    </MainWrap>
  );
};

export default Main;
