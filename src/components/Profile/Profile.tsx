import React from "react";
import styled from "styled-components";

class Profile extends React.Component {
	render() {
		return <ProfileWrap>Myprofile</ProfileWrap>;
	}
}
export default Profile;

const ProfileWrap = styled.div`
	max-width: 300px;
	width: 100%;

	background-color: #aaffaa;
`;
