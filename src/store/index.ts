import { combineReducers } from "redux";
import { watchGetPostList } from "./sagas/Post";
import { all } from "redux-saga/effects";
import Post from "./modules/Post";
import User from "./modules/User";
import { watchRegister, watchLogin } from "./sagas/User";

const rootReducer = combineReducers({
	Post,
	User,
});

export function* rootSaga() {
	yield all([watchGetPostList(), watchRegister(), watchLogin()]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
