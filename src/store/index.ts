import { combineReducers } from "redux";
import { watchGetPostList } from "./sagas/Post";
import { all } from "redux-saga/effects";
import Post from "./modules/Post";

const rootReducer = combineReducers({
	Post,
});

export function* rootSaga() {
	yield all([watchGetPostList()]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
