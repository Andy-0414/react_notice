import React from "react";
import styled from "styled-components";

class PostList extends React.Component {
	render() {
		return <PropListWrap></PropListWrap>;
	}
}
export default PostList;

const PropListWrap = styled.section`
	width: 100%;
	max-width: 720px;
	height: 100%;

	overflow-y: scroll;

	background-color: #ffaaaa;
`;
