import React from "react";
import styled from "styled-components";
import PostComments from "./PostComments/PostComments";
import IPost from "../../../schema/Post";
import { Dispatch } from "redux";
import { RootState } from "../../../store";
import IUser from "../../../schema/User";
import { connect } from "react-redux";

class PostItem extends React.Component<{ item: IPost; user: IUser }, {}> {
	render() {
		let { item, user } = this.props;
		return (
			<PostItemWrap>
				<Title>
					{item.title}({item.owner!.userID})
				</Title>
				<Content>{item.content}</Content>
				<ActionWrap>
					{user!._id == item.owner!._id && <PostDelete>글 삭제</PostDelete>}
					<PostComments commentList={[]}></PostComments>
				</ActionWrap>
			</PostItemWrap>
		);
	}
}

const mapStateToProps = (state: RootState) => {
	const { loginData } = state.User;
	return { user: loginData };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {};
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
