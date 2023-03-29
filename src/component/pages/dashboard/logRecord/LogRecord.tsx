import styled from "styled-components";
import { ISQLQuery } from "../../../types/commonTypes";
import { getFormattedQueryString } from "../../../utils/functions";

const LogRecord: React.FC<{ log: ISQLQuery }> = ({ log }) => {
  const query = getFormattedQueryString(log.sql);

  return (
    <StyledLogRecord>
      <div>{`${log.timeStart}, ${log.timeTaken}ms`}</div>
      <div>{query}</div>
    </StyledLogRecord>
  );
};

const StyledLogRecord = styled.div`
  margin-top: 8px;
  width: 100%;
  word-break: break-all;
  line-height: 1.25rem;

  & > div:first-child {
    font-size: 12px;
    color: ${({ theme }) => theme.text.second_light};
  }

  & > div:last-child {
    font-family: ui-monospace, "SFMono-Regular", "Menlo", "Monaco", "Consolas",
      "Liberation Mono", "Courier New", monospace;
    font-size: 14px;
    color: black;
  }
`;

export default LogRecord;
