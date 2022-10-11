import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { normalized } from 'utils';

const apiKey = process.env.REACT_APP_NEWS_API_KEY;
const apiKey2 = process.env.REACT_APP_NEWS_API_KEY2;
const apiKey3 = process.env.REACT_APP_NEWS_API_KEY3;
const baseUrl =  process.env.REACT_APP_NEWS_BASE_URL;

export const newsMediaStackApi = createApi({
  reducerPath: 'newsMediaStackApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    getNews: build.query<any, any>({
      transformResponse: (res: any) => {
        return {...normalized(res.results), nextPage: res.nextPage, totalResults: res.totalResults};
      },
      query: (arg: any) => {
        const { q, category, page } = arg;
        return {
          url: `news`,
          params: {
            apiKey: apiKey,
            country: 'au, us',
            category: category,
            language: 'en',
            q: q,
            page: page,
          }
        };
      },
    }),
  }),
});


export const { useGetNewsQuery, useLazyGetNewsQuery } = newsMediaStackApi;
