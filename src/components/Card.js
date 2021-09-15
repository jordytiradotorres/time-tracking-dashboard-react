import data from "../data.json";
import ellipsis from "../images/icon-ellipsis.svg";
import styled from "styled-components";
import devices from "../helpers/devices";

const CardContent = styled.div`
  background-color: hsl(15, 100%, 70%);
  border-radius: 1rem;
  margin-bottom: 1.2rem;

  @media ${devices.tablet} {
    margin-bottom: 0;
  }

  &:nth-of-type(3) {
    background-color: hsl(195, 74%, 62%);
  }
  &:nth-of-type(4) {
    background-color: hsl(348, 100%, 68%);
  }
  &:nth-of-type(5) {
    background-color: hsl(145, 58%, 55%);
  }
  &:nth-of-type(6) {
    background-color: hsl(264, 64%, 52%);
  }
  &:nth-of-type(7) {
    background-color: hsl(43, 84%, 65%);
  }
`;

const Figure = styled.figure`
  display: flex;
  justify-content: flex-end;
  overflow: hidden;
`;

const Image = styled.img`
  width: 76px;
  height: 76px;
  object-fit: contain;

  margin-top: -0.5rem;
  margin-right: 0.75rem;
  @media ${devices.tablet} {
    width: 83px;
    height: 83px;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  background: hsl(235, 46%, 20%);
  border-radius: 1rem;
  padding: 2rem 1rem;
  margin-top: -1.9rem;
  overflow: hidden;
  min-width: 200px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #292f6f;
  }

  @media ${devices.tablet} {
    padding: 1.5rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${devices.tablet} {
    display: block;
  }
`;

const H3 = styled.h3`
  color: #ffffff;
  font-weight: 400;
  margin-bottom: 0.5rem;

  @media ${devices.tablet} {
    margin-bottom: 0;
  }
`;

const Ellipsis = styled.img`
  width: 20px;
  height: 5px;
  object-fit: contain;
`;

const Time = styled.time`
  display: block;
  font-size: 2rem;
  color: #ffffff;

  @media ${devices.tablet} {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const Paragraph = styled.p`
  color: hsl(236, 100%, 87%);
  font-size: 0.9rem;
`;

const Card = ({ images }) => {
  // const hours = item.timeframes[value].current;
  // const lastWeek = item.timeframes[value].previous;

  return data.map((item, index) => (
    <CardContent key={item.title}>
      <Figure>
        <Image src={images[index].url} alt={images[index].title} />
      </Figure>

      <Content>
        <Title>
          <H3>{item.title}</H3>
          <Ellipsis src={ellipsis} alt="ellipsis" />
        </Title>

        <Date>
          {/* <time>{hours}hrs</time> */}
          <Time>5hrs</Time>
          {/* <p>Last Week - {lastWeek}hrs</p> */}
          <Paragraph>Last Week - 4hrs</Paragraph>
        </Date>
      </Content>
    </CardContent>
  ));
};

export default Card;
