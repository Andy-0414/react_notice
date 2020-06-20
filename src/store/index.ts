import { combineReducers } from "redux";
import post from "./Post";
const rootReducer = combineReducers({
	post,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
