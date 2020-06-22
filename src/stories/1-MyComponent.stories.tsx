import React from "react";
import PostItem from "../components/PostList/PostItem/PostItem";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "../store";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { withKnobs, text } from "@storybook/addon-knobs";
import IPost from "../schema/Post";

export default {
	title: "My Component",
	component: PostItem,
	decorators: [withKnobs],
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const PostList = () => {
	const title = text("title", "title");
	const content = text("content", "content");

	const post = { title, content, _id: "000", owner: { userID: "userID" } } as IPost;
	return (
		<Provider store={store}>
			<PostItem item={post}></PostItem>
		</Provider>
	);
};
