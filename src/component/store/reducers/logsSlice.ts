import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ILogRecord,
  IServerLocation,
  ISQLQuery,
} from "../../types/commonTypes";

interface ISQLRecord {
  location: IServerLocation;
  logList: ILogRecord[];
}
const logsSetting: ISQLRecord = {
  location: {
    colo: "",
    country: "",
  },
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

    setLocation(
      state,
      action: PayloadAction<{
        colo: string;
        country: string;
      }>
    ) {
      state.location.colo = action.payload.colo;
      state.location.country = action.payload.country;
    },
  },
});

export default logsSlice.reducer;
