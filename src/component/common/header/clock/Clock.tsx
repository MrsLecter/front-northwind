import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFormattedTimeString } from "../../../utils/functions";

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(
      () => setTime(getFormattedTimeString(new Date())),
      1000
    );

    return () => clearInterval(interval);
  });

  return <StyledClock>{time}</StyledClock>;
};

const StyledClock = styled.div`
  display: block;
  padding: 8px 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.text.second};

  @media (max-width: 1023px) {
    display: none;
  }
`;

export default Clock;
