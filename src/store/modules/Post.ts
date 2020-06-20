import IPost from "../../schema/Post";

export const GET_POST_LIST = "Post/GET_POST_LIST" as const;
export const CREATE_POST = "Post/CREATE_POST" as const;
export const DELETE_POST = "Post/DELETE_POST" as const;

export const GET_POST_LIST_CLEAR = "Post/GET_POST_LIST_CLEAR" as const;
export const CREATE_POST_CLEAR = "Post/CREATE_POST_CLEAR" as const;
export const DELETE_POST_CLEAR = "Post/DELETE_POST_CLEAR" as const;

export const POST_ERROR = "Post/POST_ERROR" as const;

export const getPostList = () => ({
	type: GET_POST_LIST,
	payload: null,
});
export const createPost = (token: string, post: IPost) => ({
	type: CREATE_POST,
	payload: { token, post },
});
export const deletePost = (token: string, post: IPost) => ({
	type: DELETE_POST,
	payload: { token, post },
});

export const getPostListClear = (data: IPost[]) => ({
	type: GET_POST_LIST_CLEAR,
	payload: data,
});
export const createPostClear = () => ({
	type: CREATE_POST_CLEAR,
	payload: null,
});
export const deletePostClear = () => ({
	type: DELETE_POST_CLEAR,
	payload: null,
});

export const postError = (err: Error) => ({
	type: POST_ERROR,
	payload: err,
});

export type PostAction =
	| ReturnType<typeof getPostList>
	| ReturnType<typeof createPost>
	| ReturnType<typeof deletePost>
	| ReturnType<typeof getPostListClear>
	| ReturnType<typeof createPostClear>
	| ReturnType<typeof deletePostClear>
	| ReturnType<typeof postError>;

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
				postList: action.payload,
			};
		default:
			return state;
	}
}

export default Post;
