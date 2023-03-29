import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISQLQuery } from "../../types/commonTypes";

interface ISQLRecord {
  logList: ISQLQuery[];
}
const logsSetting: ISQLRecord = {
  logList: [],
};

export const logsSlice = createSlice({
  name: "logs",
  initialState: logsSetting,

  reducers: {
    setLogList(state, action: PayloadAction<{ sqlQueries: ISQLQuery[] }>) {
      state.logList = state.logList.concat(action.payload.sqlQueries);
    },
  },
});

export default logsSlice.reducer;
