import React, { useEffect, useRef } from "react";
import avatar from "../images/image-jeremy.png";
import styled from "styled-components";
import devices from "../helpers/devices";

const DashboardItem = styled.div`
  position: relative;
  margin-bottom: 1.2rem;
  color: hsl(236, 100%, 87%);

  @media ${devices.tablet} {
    grid-column: auto;
    grid-row: 1 / span 2;
    margin-bottom: 0;
  }
`;

const Avatar = styled.div`
  position: relative;
  top: 1rem;
  display: grid;
  grid-template-columns: max-content minmax(180px, 230px);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  border-radius: 1rem;
  padding: 1.5rem 1.2rem;
  background-color: hsl(246, 80%, 60%);

  @media ${devices.tablet} {
    display: block;
    top: 0;
  }
`;

const Image = styled.img`
  width: 80px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  margin-right: 1rem;
  grid-column: auto;
  grid-row: 1 / span 2;

  @media ${devices.tablet} {
    margin-bottom: 1rem;
  }
`;

const Span = styled.span`
  grid-column: 2 / 3;
  font-weight: 500;
  font-size: 0.9rem;

  @media ${devices.tablet} {
    font-size: 0.7rem;
  }
`;

const Name = styled.h3`
  grid-column: 2 / 3;
  align-self: flex-start;
  font-weight: 300;
  color: #ffffff;

  @media ${devices.tablet} {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const Report = styled.div`
  background-color: hsl(235, 46%, 20%);
  padding: 1rem;
  padding-top: 2.5rem;
  border-radius: 0 0 1rem 1rem;

  @media ${devices.tablet} {
    padding-bottom: 1.5rem;
    margin-top: -1rem;
  }
`;

const ReportList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;

  @media ${devices.tablet} {
    flex-direction: column;
    margin-left: 0;
  }
`;

const Item = styled.li`
  @media ${devices.tablet} {
    margin-bottom: 0.75rem;
  }

  &:last-child {
    @media ${devices.tablet} {
      margin-bottom: 0;
    }
  }
`;

const ItemLink = styled.a`
  color: hsl(235, 45%, 61%);
  transition: color 0.2s;

  &:hover {
    color: #ffffff;
  }

  &.active {
    color: #ffffff;
  }
`;

const Menu = ({ handleClick, plan }) => {
  const dailyElement = useRef(null);
  const weeklyElement = useRef(null);
  const monthlyElement = useRef(null);

  useEffect(() => {
    if (plan === "daily") {
      dailyElement.current.classList.add("active");
      weeklyElement.current.classList.remove("active");
      monthlyElement.current.classList.remove("active");
    }
    if (plan === "weekly") {
      dailyElement.current.classList.remove("active");
      weeklyElement.current.classList.add("active");
      monthlyElement.current.classList.remove("active");
    }
    if (plan === "monthly") {
      dailyElement.current.classList.remove("active");
      weeklyElement.current.classList.remove("active");
      monthlyElement.current.classList.add("active");
    }
  }, [plan]);

  return (
    <DashboardItem>
      <Avatar>
        <Image src={avatar} alt="avatar" />
        <Span>Report for</Span>
        <Name>Jeremy Robson</Name>
      </Avatar>

      <Report>
        <ReportList>
          <Item>
            <ItemLink ref={dailyElement} href="#daily" onClick={handleClick}>
              Daily
            </ItemLink>
          </Item>
          <Item>
            <ItemLink ref={weeklyElement} href="#weekly" onClick={handleClick}>
              Weekly
            </ItemLink>
          </Item>
          <Item>
            <ItemLink
              ref={monthlyElement}
              href="#monthly"
              onClick={handleClick}
            >
              Monthly
            </ItemLink>
          </Item>
        </ReportList>
      </Report>
    </DashboardItem>
  );
};

export default Menu;
