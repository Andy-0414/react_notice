import React from "react";
import styled from "styled-components";
import PostComments from "./PostComments/PostComments";
import IPost from "../../../schema/Post";
import { Dispatch } from "redux";
import { RootState } from "../../../store";
import IUser from "../../../schema/User";
import { connect } from "react-redux";
import { deletePost } from "../../../store/modules/Post";

interface Props {
	item: IPost;
	user: IUser;
	token: string;
	dispatchDeletePost(token: string, post: IPost): void;
}
class PostItem extends React.Component<Props, {}> {
	render() {
		let { item, user, token, dispatchDeletePost } = this.props;
		return (
			<PostItemWrap>
				<Title>
					{item.title}({item.owner!.userID})
				</Title>
				<Content>{item.content}</Content>
				<ActionWrap>
					{user!._id === item.owner!._id && <PostDelete onClick={() => dispatchDeletePost(token, item)}>글 삭제</PostDelete>}
					<PostComments commentList={[]}></PostComments>
				</ActionWrap>
			</PostItemWrap>
		);
	}
}

const mapStateToProps = (state: RootState) => {
	const { loginData, token } = state.User;
	return { user: loginData, token };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		dispatchDeletePost: (token: string, post: IPost) => {
			dispatch(deletePost(token, post));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(PostItem);

const PostItemWrap = styled.article`
	padding: 20px;

	margin: 20px;

	border-radius: 10px;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
	background-color: white;
`;
const ActionWrap = styled.div`
	display: flex;
	flex-direction: column;
`;
const PostDelete = styled.button`
	cursor: pointer;
	border: none;
	outline: none;

	width: fit-content;

	background: none;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

	padding: 10px;

	margin-bottom: 10px;

	&:hover {
		filter: brightness(1.1);
	}
`;

const Title = styled.h2`
	margin-bottom: 10px;
`;
const Content = styled.p`
	margin-bottom: 10px;
`;
