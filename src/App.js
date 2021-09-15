import "./index.css";
import styled from "styled-components";
import Menu from "./components/Menu";

import devices from "./helpers/devices";

const Dashboard = styled.div`
  margin-top: 3rem;
`;

const Gutter = styled.div`
  margin: 0 auto;
  width: 90%;

  @media ${devices.tablet} {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
  }
`;

const App = () => {
  return (
    <main>
      <div className="wrapper">
        <Dashboard>
          <Gutter>
            <Menu />
          </Gutter>
        </Dashboard>
      </div>
    </main>
  );
};

export default App;
