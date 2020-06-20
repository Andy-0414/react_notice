import IPost from "../../schema/Post";

export const GET_POST_LIST = "Post/GET_POST_LIST" as const;
export const GET_POST_LIST_CLEAR = "Post/GET_POST_LIST_CLEAR" as const;
export const GET_POST_LIST_ERROR = "Post/GET_POST_LIST_ERROR" as const;

export const getPostList = () => ({
	type: GET_POST_LIST,
});
export const getPostListClear = (data: IPost[]) => ({
	type: GET_POST_LIST_CLEAR,
	payload: data,
});
export const getPostListError = () => ({
	type: GET_POST_LIST_ERROR,
});

type PostAction = ReturnType<typeof getPostList> | ReturnType<typeof getPostListClear> | ReturnType<typeof getPostListError>;

interface PostState {
	postList: IPost[];
}

const initialState: PostState = {
	postList: [],
};

function Post(state: PostState = initialState, action: PostAction) {
	switch (action.type) {
		case GET_POST_LIST_CLEAR:
			return {
				...state,
				postList: action.payload
			};
		default:
			return state;
	}
}

export default Post;
