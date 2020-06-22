import React from "react";
import styled from "styled-components";
import IComment from "../../../../../schema/Comment";
import Axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../../../../store";
import IUser from "../../../../../schema/User";
interface Props {
	item: IComment;
	token: string;
	user: IUser;
	onChange(): void;
}

class PostComment extends React.Component<Props> {
	render() {
		let { item, user } = this.props;
		return (
			<CommentWrapper>
				<p>
					{item.owner.userID}:{item.content}
				</p>
				{user._id == item.owner._id && <button onClick={this.handleDeleteComment}>x</button>}
			</CommentWrapper>
		);
	}
	handleDeleteComment = async () => {
		let { onChange, item, token } = this.props;
		await Axios.delete(`/comment/${item._id}`, {
			headers: {
				Authorization: token,
			},
		});
		onChange();
	};
}
const mapStateToProps = (state: RootState) => {
	const { loginData, token } = state.User;
	return { user: loginData, token };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(PostComment);

const CommentWrapper = styled.li`
	padding: 10px;

	display: flex;
	justify-content: space-between;
`;
