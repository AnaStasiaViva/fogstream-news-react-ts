import { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { newsActions } from "redux/slices";
import { useAppDispatch, useAppSelector } from "./redux";
import { useCommon } from "./useCommon";

export function useNewsScroll() {

  const { category } = useParams();
  const dispatch = useAppDispatch();

  const setNews = (params: any) => {
    dispatch(newsActions.addNewsPosts(params))
  }

  const { data , page, loadNews, setPage, loadMore } = useCommon(setNews)
  const { hasMore, ids } = useAppSelector(state => state.newsReducer);


  useEffect(() => {
    setPage(1)
  }, [category])

  useEffect(() => {
    loadNews({ page, category });
  }, [page, category]);


  return useMemo(() => ({
    loadMore,
    hasMore,
    list: ids.length > 0 ? ids.map(id => data[id]): [],
  }), [ hasMore, ids, data])

}
