import Axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { GET_POST_LIST, getPostListClear, createPostClear, deletePostClear, postError, DELETE_POST, CREATE_POST, PostAction, createPost, deletePost, getPostList } from "../modules/Post";

// 글 가져오기
export function* getPostListSaga() {
	try {
		const { data } = yield Axios.get(`/post`);
		yield put(getPostListClear(data.data));
	} catch (err) {
		yield put(postError(err));
	}
}

export function* watchGetPostList() {
	yield takeEvery(GET_POST_LIST, getPostListSaga);
}

// 글 생성하기
export function* createPostSaga(action: PostAction) {
	try {
		const { post, token } = (action as ReturnType<typeof createPost>).payload;
		const { data } = yield Axios.post(`/post`, post, {
			headers: {
				Authorization: token,
			},
        });
        console.log(data)
		yield put(getPostList());
		yield put(createPostClear());
	} catch (err) {
		yield put(postError(err));
	}
}

export function* watchCreatePost() {
	yield takeEvery(CREATE_POST, createPostSaga);
}

// 글 삭제하기
export function* deletePostSaga(action: PostAction) {
	try {
		const { post, token } = (action as ReturnType<typeof deletePost>).payload;
		const { data } = yield Axios.delete(`/post/${post._id}`, {
			headers: {
				Authorization: token,
			},
        });
        console.log(data);
		yield put(getPostList());
		yield put(deletePostClear());
	} catch (err) {
		yield put(postError(err));
	}
}

export function* watchDeletePost() {
	yield takeEvery(DELETE_POST, deletePostSaga);
}
