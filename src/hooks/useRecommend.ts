import { useEffect, useMemo } from "react";
import { articleActions, dbActions } from "redux/slices";
import { useLazyGetNewsQuery } from "services";
import { useAppDispatch, useAppSelector } from "./redux";

export function useRecommend() {

  const dispatch = useAppDispatch();

  const { data } = useAppSelector(state => state.dbReducer);
  const { recommendationsId } = useAppSelector(state => state.articleReducer);
  const [getNews] = useLazyGetNewsQuery();

  const loadNews = (reqParams: any) => {
    getNews(reqParams)
      .then((res) => {
        const dataNew = {
          data: res.data,
        };

        dispatch(dbActions.add(res.data));
        dispatch(articleActions.addRecommend(dataNew))
      })
      .catch((err: unknown) => console.log(err));
  }

  useEffect(() => {
    loadNews({ page: 1, category: 'top' });
  }, []);


  return useMemo(() => ({
    list: recommendationsId.map(id => data[id]),
    ids: recommendationsId
  }), [ recommendationsId, data])

}
