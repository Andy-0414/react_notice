import Axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { registerClear, userError, UserAction, REGISTER, LOGIN, loginClear } from "../modules/User";

// 회원가입
export function* registerSaga(action: UserAction) {
	try {
		const { data } = yield Axios.post(`/auth/user`, action.payload);
		yield put(registerClear(true));
	} catch (err) {
		yield put(userError(err));
	}
}

export function* watchRegister() {
	yield takeEvery(REGISTER, registerSaga);
}

// 로그인
export function* loginSaga(action: UserAction) {
	try {
		const { data } = yield Axios.post(`/auth/user/login`, action.payload);
		const token = data.data;
		const { data: userData } = yield Axios.post(
			`/auth/user/my`,
			{},
			{
				headers: {
					Authorization: token,
				},
			}
		);
		yield put(loginClear(token, userData.data));
	} catch (err) {
		yield put(userError(err));
	}
}

export function* watchLogin() {
	yield takeEvery(LOGIN, loginSaga);
}
