import React from "react";
import styled from "styled-components";
import PostComments from "./PostComments/PostComments";

export interface IPost {
	_id: string;
	owner: string;
	title: string;
	content: string;
	lastUpdateTime?: Date;
	createTime?: Date;
}

class PostItem extends React.Component<{ item: IPost }, {}> {
	render() {
		let { item } = this.props;
		return (
			<PostItemWrap>
				<Title>{item.title}</Title>
				<Content>{item.content}</Content>
				<PostComments commentList={[]}></PostComments>
			</PostItemWrap>
		);
	}
}
export default PostItem;

const PostItemWrap = styled.article`
	padding: 20px;

	margin: 10px;

	border-radius: 10px;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
	margin-bottom: 10px;
`;
const Content = styled.p`
	margin-bottom: 10px;
`;
