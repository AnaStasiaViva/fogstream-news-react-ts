import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = process.env.REACT_APP_FORECAST_API_KEY;
const baseUrl = process.env.REACT_APP_FORECAST_BASE_URL;

interface IForecastQuery {
  query: string
}

export const forecastApi = createApi({
  reducerPath: 'forecastApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (build) => ({
    getForecast: build.query<any, any>({
      query: (arg: IForecastQuery) => {
        const { query } = arg;
        return {
          url: `current`,
          params: {
            query: query,
            access_key: apiKey
          }
        };
      },
    }),
  }),
});


export const { useGetForecastQuery  } = forecastApi;
