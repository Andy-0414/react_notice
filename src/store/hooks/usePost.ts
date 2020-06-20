import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import { RootState } from "..";
import { getPostList } from "../Post";

export default function usePost() {
	const post = useSelector((state: RootState) => state.post);
	const dispatch = useDispatch();

	const onGetPostList = useCallback(() => dispatch(getPostList(1)), [dispatch]);

	return {
		post,
		onGetPostList,
	};
}
