import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogRecord, ILocationData, ISQLQuery } from "../../types/commonTypes";

interface ISQLRecord {
  location: ILocationData;
  logList: ILogRecord[];
}
const logsSetting: ISQLRecord = {
  location: {
    city: "",
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

    setLocation(state, action: PayloadAction<ILocationData>) {
      state.location.city = action.payload.city;
      state.location.country = action.payload.country;
    },
  },
});

export default logsSlice.reducer;
