import Axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { GET_POST_LIST, getPostListClear, getPostListError } from "../modules/Post";

export function* getPostListSaga() {
	const { data } = yield Axios.get(`http://localhost:3030/post`);
	try {
		yield put(getPostListClear(data));
	} catch {
		yield put(getPostListError());
	}
}

export function* watchGetPostList() {
	yield takeEvery(GET_POST_LIST, getPostListSaga);
}
