import React, { useState } from "react";
import Styled from "styled-components";

const SearchBarWrap = Styled.div`
  input {
    width: 300px;
    background-color:#28223f;
    border: 2px solid skyblue;
    color: white;
    padding: 5px;
    font-size: 15px;
    margin-bottom: 30px;
  }

  input::placeholder {
    color: white;
  }
  input:focus {
    outline: none;
  }

  form {
    display: flex;
    justify-content: center;
  }

  h2 {
    color: white;
    text-align: center;
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

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
    <SearchBarWrap>
      <h2>GitHub Profile Finder</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub ID를 입력하세요"
          value={userName}
          onChange={handleChange}
        />
      </form>
    </SearchBarWrap>
  );
};

export default SearchBar;
