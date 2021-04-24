import React, { useState } from "react";

const SearchBar = ({ getUser }) => {
  const [userName, setUserName] = useState("");

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(userName);
    setUserName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub ID를 입력하세요"
        value={userName}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
