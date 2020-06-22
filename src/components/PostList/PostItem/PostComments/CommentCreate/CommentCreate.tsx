import React from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../../../../store";
import IPost from "../../../../../schema/Post";
import Axios from "axios";

interface Props {
	post: IPost;
	onChange(): void;
	token: string;
}
interface States {
	content: string;
}

class CommentCreate extends React.Component<Props, States> {
	state = {
		content: "",
	} as States;
	render() {
		const { token } = this.props;
		if (token)
			return (
				<CommentCreateWrap>
					<ContentInput placeholder="내용" onChange={this.handleContentInput}></ContentInput>
					<button onClick={this.handleCreatePost}>작성</button>
				</CommentCreateWrap>
			);
		else return <CommentCreateWrap></CommentCreateWrap>;
	}
	handleContentInput = (e: React.ChangeEvent) => {
		let { value } = e.target as HTMLInputElement;
		this.setState({
			content: value,
		});
	};
	handleCreatePost = async () => {
		const { token, post, onChange } = this.props;
		const { content } = this.state;
		let { data } = await Axios.post(
			`/comment`,
			{ content, post: post._id },
			{
				headers: {
					Authorization: token,
				},
			}
		);
		onChange();
	};
}

const mapStateToProps = (state: RootState) => {
	const { token } = state.User;
	return { token };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentCreate);

const CommentCreateWrap = styled.div`
	margin-top: 10px;

	display: flex;
`;

const ContentInput = styled.input`
	border: none;
	outline: none;

	padding: 10px;
	width: 100%;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
