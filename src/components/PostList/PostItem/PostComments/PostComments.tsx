import React from "react";
import styled from "styled-components";
import PostComment from "./PostComment/PostComment";
import IComment from "../../../../schema/Comment";
import CommentCreate from "./CommentCreate/CommentCreate";
import IPost from "../../../../schema/Post";
import Axios from "axios";

interface States {
	isShowComments: boolean;
	commentList: IComment[];
}
class PostComments extends React.Component<{ post: IPost }, States> {
	state = {
		isShowComments: false,
		commentList: [],
	} as States;
	getComments() {
		// TODO: Redux 연동 (임시값)
		let { commentList } = this.state;

		return commentList.map((item) => <PostComment onChange={this.handleCommentReload} item={item} key={item._id}></PostComment>);
	}

	handleToggleShowComments = async () => {
		let { isShowComments } = this.state;
		if (!isShowComments) {
			await this.handleCommentReload();
		}
		this.setState({
			isShowComments: !isShowComments,
		});
	};
	handleCommentReload = async () => {
		let { commentList } = this.state;
		let { post } = this.props;
		let { data } = await Axios.get(`http://localhost:3030/post/${post._id}/get-comments`);
		commentList = data.data;
		this.setState({
			commentList,
		});
	};
	render() {
		let { isShowComments } = this.state;
		let { post } = this.props;
		return (
			<PostCommentsWrapper>
				<ShowButton onClick={this.handleToggleShowComments}>댓글 보기</ShowButton>
				{isShowComments && <CommentCreate onChange={this.handleCommentReload} post={post}></CommentCreate>}
				{isShowComments && <CommentList>{this.getComments()}</CommentList>}
			</PostCommentsWrapper>
		);
	}
}
export default PostComments;
const PostCommentsWrapper = styled.div``;
const CommentList = styled.ul`
	list-style: none;
`;

const ShowButton = styled.button`
	cursor: pointer;
	border: none;
	outline: none;

	background: none;
	box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

	padding: 10px;

	&:hover {
		filter: brightness(1.1);
	}
`;
