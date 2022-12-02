import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { searchActions } from "redux/slices";
import { useAppDispatch, useAppSelector } from "./redux";
import { useCommon } from "./useCommon";

export function useSearchScroll() {

  const [searchParams] = useSearchParams();
  const q = searchParams.get('q');

  const { hasMore, ids } = useAppSelector(state => state.searchReducer);
  const dispatch = useAppDispatch();

  const setNews = (params: any) => {
    if (params.data.totalResults === 0) {
      dispatch(searchActions.clearSearch());
    }
      dispatch(searchActions.addSearchPosts(params))
  }

  const { data, page, loadNews, setPage, loadMore } = useCommon(setNews);

  useEffect(() => {
    setPage(1)
  }, [q])

  useEffect(() => {
    loadNews({ page, q });
  }, [page, q]);


  return useMemo(() => ({
    loadMore,
    hasMore,
    list: ids ? ids.map(id => data[id]) : []
  }), [
    hasMore, ids, data
  ])

}
