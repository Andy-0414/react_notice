import React from "react";
import styled from "styled-components";
import PostItem from "./PostItem/PostItem";
import IPost from "../../schema/Post";
import { connect } from "react-redux";
import { getPostList } from "../../store/modules/Post";
import { RootState } from "../../store";
import { Dispatch } from "redux";
import PostCreate from "./PostCreate/PostCreate";

interface Props {
	dispatchGetPostList(): void;
	list: IPost[];
}
class PostList extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
		this.handleReloadPost();
	}
	handleReloadPost = () => {
		const { dispatchGetPostList } = this.props;
		dispatchGetPostList();
	};
	getPostItems() {
		let { list } = this.props;
		return list.map((item: IPost) => <PostItem item={item} key={item._id}></PostItem>);
	}
	render() {
		return (
			<PropListWrap>
				<ReloadButton onClick={this.handleReloadPost}>새로고침</ReloadButton>
				<PostCreate></PostCreate>
				{this.getPostItems()}
			</PropListWrap>
		);
	}
}

const mapStateToProps = (state: RootState) => {
	return { list: state.Post.postList };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return { dispatchGetPostList: () => dispatch(getPostList()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(PostList);

const PropListWrap = styled.section`
	width: 100%;
	max-width: 720px;
	height: 100%;

	overflow-y: scroll;

	display: flex;
	flex-direction: column;
`;

const ReloadButton = styled.button`
	cursor: pointer;
	border: none;
	outline: none;
	background: none;

	padding: 10px;

	margin: 20px;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
	background-color: white;

	transition: 0.2s;

	&:hover {
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	}
`;
