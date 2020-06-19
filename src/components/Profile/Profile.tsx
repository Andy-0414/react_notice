import React from "react";
import styled from "styled-components";

class Profile extends React.Component {
	render() {
		// TODO: 프로필 로그인 레이아웃 디자인해야함
		return <ProfileWrap>Myprofile</ProfileWrap>;
	}
}
export default Profile;

const ProfileWrap = styled.div`
	max-width: 300px;
	width: 100%;

	background-color: #aaffaa;
`;
