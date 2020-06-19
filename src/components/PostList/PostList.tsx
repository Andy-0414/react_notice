import React from "react";
import styled from "styled-components";
import PostItem, { IPost } from "./PostItem/PostItem";

class PostList extends React.Component {
	getPostItems() {
		// TODO: Redux 연결 (임시값)
		let list: IPost[] = [
			{ _id: "1", owner: "o1", title: "Hello World", content: "Hello React" },
			{ _id: "2", owner: "o2", title: "Hello World2", content: "Hello React2" },
		];
		return list.map((item) => <PostItem item={item} key={item._id}></PostItem>);
	}
	render() {
		return <PropListWrap>{this.getPostItems()}</PropListWrap>;
	}
}
export default PostList;

const PropListWrap = styled.section`
	width: 100%;
	max-width: 720px;
	height: 100%;

	overflow-y: scroll;

	display: flex;
	flex-direction: column;
`;
