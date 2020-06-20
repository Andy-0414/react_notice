import IUser, { IUserDefaultLogin } from "../../schema/User";

export const REGISTER = "User/REGISTER" as const;
export const LOGIN = "User/LOGIN" as const;

export const REGISTER_CLEAR = "User/REGISTER_CLEAR" as const;
export const LOGIN_CLEAR = "User/LOGIN_CLEAR" as const;

export const USER_ERROR = "User/USER_ERROR" as const;

export const register = (loginData: IUserDefaultLogin) => ({
	type: REGISTER,
	payload: loginData,
});
export const login = (loginData: IUserDefaultLogin) => ({
	type: LOGIN,
	payload: loginData,
});

export const registerClear = (result: boolean) => ({
	type: REGISTER_CLEAR,
	payload: result,
});
export const loginClear = (token: string, userData: IUser) => ({
	type: LOGIN_CLEAR,
	payload: { token, userData },
});

export const userError = (err: Error) => ({
	type: USER_ERROR,
	payload: err,
});

export type UserAction = ReturnType<typeof register> | ReturnType<typeof login> | ReturnType<typeof registerClear> | ReturnType<typeof loginClear> | ReturnType<typeof userError>;
interface UserState {
	token: string;
	loginData: any; // TODO: User 스키마 구현
}

const initialState: UserState = {
	token: "",
	loginData: {},
};

function User(state: UserState = initialState, action: UserAction) {
	switch (action.type) {
		case LOGIN_CLEAR:
			return {
				...state,
				token: action.payload.token,
				loginData: action.payload.userData,
			};
		default:
			return state;
	}
}

export default User;
