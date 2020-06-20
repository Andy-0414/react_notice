import React from "react";
import styled from "styled-components";
import { createPost } from "../../../store/modules/Post";
import IPost from "../../../schema/Post";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { RootState } from "../../../store";

interface Props {
	dispatchPostCreate(token: string, post: IPost): void;
	token: string;
}
interface States {
	title: string;
	content: string;
}

class PostCreate extends React.Component<Props, States> {
	state = {
		title: "",
		content: "",
	} as States;
	render() {
		const { dispatchPostCreate, token } = this.props;
		const { title, content } = this.state;

		return (
			<PostCreateWrap>
				<TitleInput placeholder="제목" onChange={this.handleTitleInput}></TitleInput>
				<ContentInput placeholder="내용" onChange={this.handleContentInput}></ContentInput>
				<ActionWrap>
					<CreateButton
						onClick={() => {
							dispatchPostCreate(token, { title, content });
						}}
					>
						글 쓰기
					</CreateButton>
				</ActionWrap>
			</PostCreateWrap>
		);
	}
	handleTitleInput = (e: React.ChangeEvent) => {
		let { value } = e.target as HTMLInputElement;
		this.setState({
			title: value,
		});
	};
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
	return { dispatchPostCreate: (token: string, post: IPost) => dispatch(createPost(token, post)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCreate);

const PostCreateWrap = styled.div`
	padding: 20px;

	margin: 20px;

	border-radius: 10px;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
	background-color: white;
`;

const TitleInput = styled.input`
	border: none;
	outline: none;

	padding: 10px;

	width: 100%;
	margin-bottom: 10px;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
const ContentInput = styled.textarea`
	border: none;
	outline: none;

	padding: 10px;
	width: 100%;
	min-height: 6em;

	margin-bottom: 10px;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
const ActionWrap = styled.div`
	width: 100%;

	display: flex;
	justify-content: flex-end;
`;
const CreateButton = styled.button`
	cursor: pointer;
	border: none;
	outline: none;
	background: none;

	padding: 10px;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

	transition: 0.2s;

	&:hover {
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	}
`;
