import React from "react";
import "./App.css";
import PhotoList from './Components/PhotoList';
import Header from "./Components/Header";
import styled from "styled-components";

const Clr = styled.div`
  padding-bottom: 80px;
  background-color: papayawhip;
`;

function App() {
  return (
    <Clr>
      <div className="App">
        <Header />
        <PhotoList />
      </div>
    </Clr>
  );
}

// first line!

export default App;
