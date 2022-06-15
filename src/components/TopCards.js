import React from "react";
import styled from "styled-components";
import Card from "./Card";

const TopTitle = styled.h2`
  display: flex;
  justify-self: flex-start;
`;
const Div = styled.div`
  border-radius: 30px;

  display: flex;
  margin: 0 0 0 5%;
  padding: 0.1% 0.8% 0.5% 0.8%;
  background-color: #e8e9e9;
`;
const Div1 = styled.div`
  border-radius: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  padding: 0 2%;
  margin-top: 0;
`;
function TopCards() {
  const colors = ["#C0BFBF", "#C0BFBF", "#C0BFBF"];
  return (
    <Div>
      <Div1>
        <TopTitle>Clientes para primeiro contato</TopTitle>
        <Div>
          <CardContainer>
            <Card color={colors[1]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[2]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[0]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[1]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[2]} />
          </CardContainer>
        </Div>
      </Div1>
    </Div>
  );
}

export default TopCards;
