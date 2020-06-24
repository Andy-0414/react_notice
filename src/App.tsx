import React from "react";
import "./App.scss";
import Profile from "./components/Profile/Profile";
import PostList from "./components/PostList/PostList";
/*
로그인 화면(Profile) | 글 리스트(PostList) | nav (추가 예정)

*/
class App extends React.Component {
	render() {
		return (
			<div className="app">
				<Profile></Profile>
				<PostList></PostList>
				<nav className="nav"></nav>
			</div>
		);
	}
}
export default App;
