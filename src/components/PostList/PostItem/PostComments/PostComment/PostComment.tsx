import React from "react";
import styled from "styled-components";
import { IPost } from "../../PostItem";

export interface IComment {
	_id: string;
	post?: IPost;
	owner: Object;
	content: string;
	lastUpdateTime?: Date;
	createTime?: Date;
}

class PostComment extends React.Component<{ item: IComment }> {
	render() {
		let { item } = this.props;
		return <li>{item.content}</li>;
	}
}
export default PostComment;
