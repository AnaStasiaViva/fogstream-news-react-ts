import { useMemo, useState } from "react";
import { dbActions } from "redux/slices";
import { useLazyGetNewsQuery } from "services";
import { useAppDispatch, useAppSelector } from "./redux";

export function useCommon( cb:(vals: any) => void) {

  const dispatch = useAppDispatch();
  const { data } = useAppSelector(state => state.dbReducer);
  const [getNews] = useLazyGetNewsQuery();

  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage((page) => page + 1);
  };

  const loadNews = (reqParams: any) => {
    getNews(reqParams)
      .then((res) => {
        const dataNew = {
          data: res.data,
          nextPage: res.data.nextPage
        };

        dispatch(dbActions.add(res.data));
        cb(dataNew);
      })
      .catch((err: unknown) => console.log(err));
  }

  return useMemo(() => ({
    loadMore,
    data,
    page,
    loadNews,
    setPage
  }), [data, page])

}
