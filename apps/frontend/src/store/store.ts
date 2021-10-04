import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import appSlice from "./app.slice";

export const store = configureStore({
  reducer: { app: appSlice },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
