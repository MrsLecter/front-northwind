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
import axios from "axios";
import { useEffect, useState } from "react";
import { METRICS_URL } from "@const";
import { IMetricsReponse, IServerLocation } from "../../types/commonTypes";

const Dashboard = () => {
  const { logList, location } = useAppSelector((store) => store.logsReducer);
  const { metrics, logs } = getDashboardData(logList);
  const [worker, setWorker] = useState<IServerLocation>({
    colo: "",
    country: "",
  });

  useEffect(() => {
    const getLocation = async () => {
      const response = await axios.get<IMetricsReponse>(METRICS_URL);
      if (response.status === 200) {
        setWorker({
          colo: response.data.continentCode,
          country: response.data.countryCode,
        });
      }
    };
    if (!location.colo && !location.country) {
      getLocation();
    } else {
      setWorker({
        colo: location.colo,
        country: location.country,
      });
    }
  }, []);

  return (
    <StyledDashboard>
      <StyledInfoContainer>
        <StyledInfo>
          <p>Worker</p>
          <p>Colo:&nbsp;{worker.colo}</p>
          <p>Country:&nbsp;{worker.country}</p>
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
        {logs &&
          logs.map((item, index) => <LogRecord key={index} log={item} />)}
      </StyledActivityLog>
    </StyledDashboard>
  );
};

export default Dashboard;
