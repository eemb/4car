import React from "react";
import styled from "styled-components";
import Card from "./CardColumn";

const Div = styled.div`
  display: flex;
  margin: 1% 0 0 0%;
  border-radius: 30px;
  box-shadow: 0 8px 16px 0 #bdc9d7;
  width: 100%;
  height: 700px;
  border: 10px;
`;
const BodyColumnCell = styled.div`
  background-color: #e9e9e9;
  height: 80%;
  width: 100%;
  margin: 2% 0;
  padding: 10% 8%;
  border-radius: 20px;
  &:first-child {
    margin-left: 8%;
  }
`;
const CellWrapper = styled.div`
  min-width: 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 6%;
  &:first-child {
    margin-left: 6.5%;
  }
`;
const Title = styled.h3`
  margin: 3% 0;
  display: flex;
  margin-left: 3%;
  white-space: nowrap;
`;
const CardContainer = styled.div`
  justify-content: center;
  display: flex;
  margin: 13% 0;
  &:first-child {
    margin-top: 0;
  }
`;

function Body() {
  const colors = ["#3eb93b", "#E4D442", "#EB4D4D"];
  return (
    <Div>
      <CellWrapper>
        <Title> Menos de 24 horas</Title>
        <BodyColumnCell>
          <CardContainer>
            <Card color={colors[1]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[0]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[2]} />
          </CardContainer>
        </BodyColumnCell>
      </CellWrapper>
      <CellWrapper>
        <Title> Menos de uma semana</Title>
        <BodyColumnCell>
          <CardContainer>
            <Card color={colors[1]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[0]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[2]} />
          </CardContainer>
        </BodyColumnCell>
      </CellWrapper>
      <CellWrapper>
        <Title> Mais de uma semana</Title>
        <BodyColumnCell>
          <CardContainer>
            <Card color={colors[1]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[0]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[2]} />
          </CardContainer>
        </BodyColumnCell>
      </CellWrapper>
      <CellWrapper>
        <Title> Mais de uma semana</Title>
        <BodyColumnCell>
          <CardContainer>
            <Card color={colors[1]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[0]} />
          </CardContainer>
          <CardContainer>
            <Card color={colors[2]} />
          </CardContainer>
        </BodyColumnCell>
      </CellWrapper>
    </Div>
  );
}

export default Body;
