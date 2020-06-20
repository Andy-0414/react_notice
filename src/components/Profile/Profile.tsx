import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store";
import IUser, { IUserDefaultLogin } from "../../schema/User";
import { register, login } from "../../store/modules/User";

interface Props {
	dispatchRegister(loginData: IUserDefaultLogin): void;
	dispatchLogin(loginData: IUserDefaultLogin): void;
	user: IUser | null;
}
interface States {
	id: string;
	password: string;
}
class Profile extends React.Component<Props, States> {
	state = {
		id: "",
		password: "",
	} as States;
	render() {
		const { dispatchRegister, dispatchLogin, user } = this.props;
		let { id, password } = this.state;
		console.log(user);
		if (user?.userID) return <ProfileWrap>{user!.userID}님</ProfileWrap>;
		else
			return (
				<ProfileWrap>
					<div>
						<Input placeholder="id" onChange={this.handleIDInput}></Input>
						<Input placeholder="password" onChange={this.handlePasswordInput}></Input>
					</div>
					<ActionWrap>
						<Button
							onClick={() => {
								dispatchLogin({ userID: id, password });
							}}
						>
							로그인
						</Button>
						<Button
							onClick={() => {
								dispatchRegister({ userID: id, password });
							}}
						>
							회원가입
						</Button>
					</ActionWrap>
				</ProfileWrap>
			);
	}
	handleIDInput = (e: React.ChangeEvent) => {
		let { value } = e.target as HTMLInputElement;
		this.setState({
			id: value,
		});
	};
	handlePasswordInput = (e: React.ChangeEvent) => {
		let { value } = e.target as HTMLInputElement;
		this.setState({
			password: value,
		});
	};
}

const mapStateToProps = (state: RootState) => {
	return { user: state.User.loginData };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
	return { dispatchRegister: (loginData: IUserDefaultLogin) => dispatch(register(loginData)), dispatchLogin: (loginData: IUserDefaultLogin) => dispatch(login(loginData)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const ProfileWrap = styled.div`
	max-width: 300px;
	width: 100%;
	height: fit-content;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
	background-color: white;

	padding: 20px;
	margin-top: 20px;

	border-radius: 10px;
`;
const ActionWrap = styled.div`
	display: flex;
	justify-content: flex-end;
`;
const Input = styled.input`
	border: none;
	outline: none;

	padding: 10px;

	width: 100%;
	margin-bottom: 10px;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;
const Button = styled.button`
	cursor: pointer;
	border: none;
	outline: none;
	background: none;

	padding: 10px;
	margin-left: 10px;

	box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);

	transition: 0.2s;

	&:hover {
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	}
`;
