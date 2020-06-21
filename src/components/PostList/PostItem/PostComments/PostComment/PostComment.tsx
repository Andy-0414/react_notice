import React from "react";
import styled from "styled-components";
import IComment from "../../../../../schema/Comment";

class PostComment extends React.Component<{ item: IComment }> {
	render() {
		let { item } = this.props;
		return (
			<CommentWrapper>
				{item.owner.userID}:{item.content}
			</CommentWrapper>
		);
	}
}
export default PostComment;

const CommentWrapper = styled.li``;
