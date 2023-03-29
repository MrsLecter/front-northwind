import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogRecord, ISQLQuery } from "../../types/commonTypes";

interface ISQLRecord {
  logList: ILogRecord[];
}
const logsSetting: ISQLRecord = {
  logList: [],
};

export const logsSlice = createSlice({
  name: "logs",
  initialState: logsSetting,

  reducers: {
    setLogList(
      state,
      action: PayloadAction<{
        url: string;
        param: number | string;
        sqlQueries: ISQLQuery[];
      }>
    ) {
      state.logList = state.logList.concat({
        url: action.payload.url,
        param: action.payload.param,
        queries: action.payload.sqlQueries,
      });
    },
  },
});

export default logsSlice.reducer;
