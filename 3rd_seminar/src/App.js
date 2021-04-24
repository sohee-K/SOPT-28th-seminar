import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import { getUserData } from "./lib/api/githubAPI";

function App() {
  const [userData, setUserData] = useState("");

  const getUser = async (name) => {
    const data = await getUserData(name);
    setUserData(data);
  };

  return (
    <>
      <SearchBar getUser={getUser} />
      <ResultCard data={userData} />
    </>
  );
}

export default App;
