import logo from "./logo.svg";
import "./App.css";
import StyledSideNav from "./components/StyledSideNav";
import Card from "./components/Card";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import styled from "styled-components";
import Header from "./components/Header";
import TopCards from "./components/TopCards";
import Body from "./components/Body";

const Container = styled.div`
  display: flex;
`;

const Grad = styled.div`
  position: absolute;
  right: 25%;
  z-index: 9;
  overflow: visible;
  height: 100vh;
  width: 200px;
  background: linear-gradient(
    90deg,
    rgba(232, 233, 233, 0) 0%,
    rgba(255, 255, 255, 1) 80%
  );
`;

function App() {
  return (
    <div className="App">
      <Grad />
      <StyledSideNav />
      <Header />
      <TopCards />
      <Body>
        <Card></Card>
      </Body>

      <p>hey </p>
    </div>
  );
}

export default App;
