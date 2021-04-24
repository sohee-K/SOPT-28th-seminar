import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import { getUserData } from "./lib/api/githubAPI";
import Styled from "styled-components";

const MainWrap = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

function App() {
  const [userData, setUserData] = useState("");

  const getUser = async (name) => {
    const data = await getUserData(name);
    setUserData(data);
  };

  return (
    <MainWrap>
      <SearchBar getUser={getUser} />
      <ResultCard data={userData} />
    </MainWrap>
  );
}

export default App;
