import styled from "styled-components";
import Card from "./components/Card";
import Menu from "./components/Menu";

import devices from "./helpers/devices";

import iconWork from "./images/icon-work.svg";
import iconExercise from "./images/icon-exercise.svg";
import iconPlay from "./images/icon-play.svg";
import iconSelfCare from "./images/icon-self-care.svg";
import iconSocial from "./images/icon-social.svg";
import iconStudy from "./images/icon-study.svg";

const Wrapper = styled.div`
  min-width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

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
  const images = [
    {
      url: iconWork,
      title: "Work",
    },
    {
      url: iconPlay,
      title: "Play",
    },
    {
      url: iconStudy,
      title: "Study",
    },
    {
      url: iconExercise,
      title: "Exercise",
    },
    {
      url: iconSocial,
      title: "Social",
    },
    {
      url: iconSelfCare,
      title: "Self Care",
    },
  ];

  return (
    <main>
      <Wrapper>
        <Dashboard>
          <Gutter>
            <Menu />
            <Card images={images} />
          </Gutter>
        </Dashboard>
      </Wrapper>
    </main>
  );
};

export default App;
