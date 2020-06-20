import Axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { GET_POST_LIST, getPostListClear, postError } from "../modules/Post";

export function* getPostListSaga() {
	try {
		const { data } = yield Axios.get(`http://localhost:3030/post`);
		yield put(getPostListClear(data));
	} catch (err) {
		yield put(postError(err));
	}
}

export function* watchGetPostList() {
	yield takeEvery(GET_POST_LIST, getPostListSaga);
}
