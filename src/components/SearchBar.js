import React from "react";
import styled from "styled-components";
import searchIcon from "./../assets/search.png";

const SearchContainer = styled.div`
  display: flex;
  margin: 1% 32%;
  align-items: center;
  border-radius: 20px;
  z-index: 9;

  & input {
    background-color: #e9e9e9;
    border-radius: 15px;
    border-style: groove;
    border: 100px;
    width: 200px;
    height: 30px;
  }
`;

const IconContainer = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 2px;

  & img {
    width: 100%;
    height: auto;
  }
`;
function BodySearchBar() {
  return (
    <SearchContainer>
      <IconContainer>
        <img src={searchIcon} alt=""></img>
      </IconContainer>
      <input type="text" placeholder=" Pesquisar"></input>
    </SearchContainer>
  );
}

export default BodySearchBar;
