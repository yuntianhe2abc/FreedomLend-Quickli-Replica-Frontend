import { configureStore, combineReducers } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";

const rootReducer = combineReducers({
  formReducer: formReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
