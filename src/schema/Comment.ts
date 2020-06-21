import IPost from "./Post";
import IUser from "./User";

export default interface IComment {
	_id: string;
	post?: IPost;
	owner: IUser;
	content: string;
	lastUpdateTime?: Date;
	createTime?: Date;
}
