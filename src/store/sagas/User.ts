import Axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { registerClear, userError, UserAction, REGISTER, LOGIN, loginClear } from "../modules/User";

export function* registerSaga(action: UserAction) {
	try {
		const { data } = yield Axios.post(`http://localhost:3030/auth/user`, action.payload);
		console.log(data);
		yield put(registerClear(true));
	} catch (err) {
		yield put(userError(err));
	}
}

export function* watchRegister() {
	yield takeEvery(REGISTER, registerSaga);
}

export function* loginSaga(action: UserAction) {
	try {
		const { data } = yield Axios.post(`http://localhost:3030/auth/user/login`, action.payload);
		const token = data.data;
		const { data: userData } = yield Axios.post(
			`http://localhost:3030/auth/user/my`,
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
