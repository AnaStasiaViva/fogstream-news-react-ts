import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { forecastApi, newsMediaStackApi } from "services";
import { newsReducer, searchReducer, modalReducer, homeReducer, articleReducer, dbReducer } from './slices';

const rootReducer = combineReducers({
  [forecastApi.reducerPath]: forecastApi.reducer,
  [newsMediaStackApi.reducerPath]: newsMediaStackApi.reducer,
  newsReducer,
  searchReducer,
  modalReducer,
  homeReducer,
  articleReducer,
  dbReducer
});

const setupStore = ()=> {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(forecastApi.middleware, newsMediaStackApi.middleware),
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();
