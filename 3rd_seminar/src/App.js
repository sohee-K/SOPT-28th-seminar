import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ResultCard from "./components/ResultCard";
import { getUserData } from "./lib/api/githubAPI";

function App() {
  useEffect(() => {
    getUserData("sohee-K");
  }, []);

  return (
    <>
      <SearchBar />
      <ResultCard />
    </>
  );
}

export default App;
