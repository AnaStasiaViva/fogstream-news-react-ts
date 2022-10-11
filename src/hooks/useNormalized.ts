import { useEffect, useMemo } from "react";
import { dbActions, homeActions } from "redux/slices";
import { useAppDispatch, useAppSelector } from "./redux";

export function useNormalized({ data: dataFrom, category }: any) {

  const dispatch = useAppDispatch();

  const { data } = useAppSelector(state => state.dbReducer);
  const { ids } = useAppSelector(state => state.homeReducer);

  const handlePosts = () => {
    dispatch(homeActions.addPosts({ data: dataFrom, category }));
    dispatch(dbActions.add({ data: dataFrom}))
  }

  useEffect(() => {
    if (!dataFrom) return;
     else handlePosts();
  }, [dataFrom])

  return useMemo(() => ({
    list: data,
    ids
  }), [data, ids])

}