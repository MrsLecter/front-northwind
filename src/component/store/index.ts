import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logsReducer from "./reducers/logsSlice";

const rootReducer = combineReducers({
  logsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export const appstore = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
