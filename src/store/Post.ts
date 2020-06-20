import IPost from "../schema/Post";

const GET_POST_LIST = "Post/GET_POST_LIST" as const;

export const getPostList = (diff: number) => ({
	type: GET_POST_LIST,
	payload: diff,
});
type PostAction = ReturnType<typeof getPostList>;

interface PostState {
	postList: IPost[];
}

const initialState: PostState = {
	postList: [],
};

function post(state: PostState = initialState, action: PostAction) {
	switch (action.type) {
		case GET_POST_LIST:
			return {};
	}
}

export default post;
