import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Result from "./components/Result";
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
  const [userState, setUserState] = useState({
    status: "idle",
    data: null,
  });

  const getUser = async (name) => {
    setUserState({ ...userState, status: "pending" });
    try {
      const data = await getUserData(name);
      if (data === null) throw Error;
      setUserState({ status: "resolved", data: data });
    } catch (e) {
      setUserState({ status: "rejected", data: null });
      console.log(e);
    }
  };

  return (
    <MainWrap>
      <SearchBar getUser={getUser} />
      <Result userState={userState} />
    </MainWrap>
  );
}

export default App;
