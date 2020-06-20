import IUser from "./User";

export default interface IPost {
	_id?: string;
	owner?: IUser;
	title: string;
	content: string;
	lastUpdateTime?: Date;
	createTime?: Date;
}
