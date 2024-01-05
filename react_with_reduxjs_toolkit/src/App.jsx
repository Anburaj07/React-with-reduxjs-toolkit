import styled from "styled-components";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <DIV>
      <Navbar />
      <AllRoutes />
    </DIV>
  );
}

export default App;

const DIV = styled.div`
  width: 100%;
`;
