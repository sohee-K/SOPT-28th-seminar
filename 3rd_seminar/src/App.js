import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import { getUserData } from "./lib/api/githubAPI";

function App() {
  const [userData, setUserData] = useState("");

  const getUser = async (name) => {
    const data = await getUserData(name);
    setUserData(data);
  };

  useEffect(() => {
    getUser("sohee-K");
  }, []);

  return (
    <>
      <SearchBar />
      <ResultCard data={userData} />
    </>
  );
}

export default App;
