export default interface IPost {
	_id: string;
	owner: string;
	title: string;
	content: string;
	lastUpdateTime?: Date;
	createTime?: Date;
}
