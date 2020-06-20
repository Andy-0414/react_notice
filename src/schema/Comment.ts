import IPost from "./Post";

export default interface IComment {
	_id: string;
	post?: IPost;
	owner: Object;
	content: string;
	lastUpdateTime?: Date;
	createTime?: Date;
}
