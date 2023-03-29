import { useAppSelector } from "../../hooks/reducers.hook";
import { getDashboardData } from "../../utils/functions";
import LogRecord from "./logRecord/LogRecord";
import {
  StyledDashboard,
  StyledInfo,
  StyledInfoContainer,
  StyledActivityLog,
  StyledActivityHeader,
} from "./Dashboard.styles";

const Dashboard = () => {
  const { logList } = useAppSelector((store) => store.logsReducer);
  const { metrics, logs } = getDashboardData(logList);

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
          <p>Query count:&nbsp;{metrics.queryCount}</p>
          <p>Results count:&nbsp;{metrics.resultsCount}</p>
          <p># SELECT:&nbsp;{metrics.selectQuery}</p>
          <p># SELECT WHERE:&nbsp;{metrics.selectWhereQuery}</p>
          <p># SELECT LEFT JOIN:&nbsp;{metrics.selectJoinQuery}</p>
        </StyledInfo>
      </StyledInfoContainer>
      <StyledActivityLog>
        <StyledActivityHeader>
          <p>Activity log</p>
          <p>Explore the app and see metrics here</p>
        </StyledActivityHeader>
        {logs.map((item, index) => (
          <LogRecord key={index} log={item} />
        ))}
      </StyledActivityLog>
    </StyledDashboard>
  );
};

export default Dashboard;
