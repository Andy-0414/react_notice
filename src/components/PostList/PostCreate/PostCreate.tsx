import React from "react";
import styled from "styled-components";

class PostCreate extends React.Component {
	render() {
		return (
			<PostCreateWrap>
				<TitleInput placeholder="제목"></TitleInput>
				<ContentInput placeholder="내용"></ContentInput>
			</PostCreateWrap>
		);
	}
}
export default PostCreate;

const PostCreateWrap = styled.div`
	padding: 20px;

	margin: 10px;

	border-radius: 10px;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
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

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
