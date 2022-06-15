import React from "react";
import BodySearchBar from "./SearchBar";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 20px;
  margin: 0.5% 7%;
  width: 93%;
  justify-content: flex-end;
`;

function Header() {
  return (
    <Div>
      <BodySearchBar></BodySearchBar>
    </Div>
  );
}

export default Header;
