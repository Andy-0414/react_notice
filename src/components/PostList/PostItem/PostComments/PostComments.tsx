import React from "react";
import styled from "styled-components";
import PostComment from "./PostComment/PostComment";
import IComment from "../../../../schema/Comment";

class PostComments extends React.Component<{ commentList: IComment[] }, { isShowComments: boolean }> {
	state = {
		isShowComments: false,
	};
	getComments() {
		// TODO: Redux 연동 (임시값)
		let list: IComment[] = [
			{
				_id: "c0",
				content: "comment",
				owner: {},
			},
		];

		return list.map((item) => <PostComment item={item} key={item._id}></PostComment>);
	}

	handleToggleShowComments = () => {
		let { isShowComments } = this.state;
		this.setState({
			isShowComments: !isShowComments,
		});
	};

	render() {
		let { isShowComments } = this.state;
		return (
			<PostCommentsWrapper>
				<ShowButton onClick={this.handleToggleShowComments}>댓글 보기</ShowButton>
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
