import React from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../../../../store";

interface Props {}
interface States {}

class CommentCreate extends React.Component<Props, States> {
	state = {
		content: "",
	} as States;
	render() {
		return (
			<CommentCreateWrap>
				<ContentInput placeholder="내용" onChange={this.handleContentInput}></ContentInput>
				<button>작성</button>
			</CommentCreateWrap>
		);
	}
	handleContentInput = (e: React.ChangeEvent) => {
		let { value } = e.target as HTMLInputElement;
		this.setState({
			content: value,
		});
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
