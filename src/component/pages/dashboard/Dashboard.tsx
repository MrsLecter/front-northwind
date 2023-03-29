import styled from "styled-components";
import { useAppSelector } from "../../hooks/reducers.hook";
import { getDashboardData } from "../../utils/functions";

const Dashboard = () => {
  const { logList } = useAppSelector((store) => store.logsReducer);
  const {
    queryCount,
    resultsCount,
    selectQuery,
    selectWhereQuery,
    selectJoinQuery,
  } = getDashboardData(logList);

  return (
    <StyledDashboard>
      <StyledInfoContainer>
        <StyledInfo>
          <p>Worker</p>
          <p>Colo:&nbsp;KBP</p>
          <p>Country:&nbsp;UA</p>
        </StyledInfo>
        <StyledInfo>
          <p>SQL Metrics</p>
          <p>Query count:&nbsp;{queryCount}</p>
          <p>Results count:&nbsp;{resultsCount}</p>
          <p># SELECT:&nbsp;{selectQuery}</p>
          <p># SELECT WHERE:&nbsp;{selectWhereQuery}</p>
          <p># SELECT LEFT JOIN:&nbsp;{selectJoinQuery}</p>
        </StyledInfo>
      </StyledInfoContainer>
      <StyledActivityLog>
        <StyledActivityHeader>
          <p>Activity log</p>
          <p>Explore the app and see metrics here</p>
        </StyledActivityHeader>
      </StyledActivityLog>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px 48px 24px 48px;
  background-color: ${({ theme }) => theme.background.grey};
`;

const StyledInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.background.grey};
`;

const StyledInfo = styled.div`
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

const StyledActivityLog = styled.div`
  width: 100%;
`;

const StyledActivityHeader = styled.div`
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

export default Dashboard;
