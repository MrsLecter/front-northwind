import { useAppDispatch, useAppSelector } from "../../hooks/reducers.hook";
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
import { logsSlice } from "../../store/reducers/logsSlice";
import { useEffect, useState } from "react";
import { ILocationData, ILocationResponse } from "../../types/commonTypes";
import { LOCATION_API_URL } from "@const";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const { setLocation } = logsSlice.actions;
  const { logList, location } = useAppSelector((store) => store.logsReducer);
  const { metrics, logs } = getDashboardData(logList);
  const [worker, setWorker] = useState<ILocationData>({
    city: "",
    country: "",
  });

  useEffect(() => {
    const getLocation = async () => {
      const response = await axios.get<ILocationResponse>(LOCATION_API_URL);

      if (response.status === 200) {
        const obj = {
          city: response.data.city,
          country: response.data.country_code,
        };
        dispatch(setLocation(obj));
        setWorker(obj);
        return response;
      }
    };

    if (!location.city && !location.country) {
      getLocation();
    } else {
      setWorker({
        city: location.city,
        country: location.country,
      });
    }
  }, []);

  return (
    <StyledDashboard>
      <StyledInfoContainer>
        <StyledInfo>
          <p>Worker</p>
          <p>City:&nbsp;{worker.city}</p>
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
