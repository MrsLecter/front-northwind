import styled from "styled-components";

export const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 48px 24px 48px;
  background-color: ${({ theme }) => theme.background.grey};
`;

export const StyledInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.background.grey};
`;

export const StyledInfo = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  p {
    font-size: 14px;
    line-height: 20px;
    margin: 0px;
  }

  p:first-child {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const StyledActivityLog = styled.div`
  width: 100%;
`;

export const StyledActivityHeader = styled.div`
  width: 100%;

  p {
    font-size: 12px;
    line-height: 16px;
    margin: 0px;
  }

  p:first-child {
    font-size: 20px;
    line-height: 28px;
  }
`;
