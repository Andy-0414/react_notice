import React from "react";
import "./App.scss";
import Profile from "./components/Profile/Profile";
import PostList from "./components/PostList/PostList";

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
