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
}
interface States {
	list: IPost[];
}
class PostList extends React.Component<Props, States> {
	constructor(props: Props) {
		super(props);
		this.handleReloadPost();
	}
	state = {
		list: [] as IPost[],
	};
	handleReloadPost = () => {
		let { dispatchGetPostList } = this.props;
		dispatchGetPostList();
	};
	getPostItems() {
		let { list } = this.state;
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
	width: 100%;
	display: flex;
	flex-direction: column;
`;
