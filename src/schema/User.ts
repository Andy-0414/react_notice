export interface IUserDefaultLogin {
	userID: string;
	password: string;
}
export default interface IUser extends IUserDefaultLogin {
	loginType?: string;
	username?: string;
	email?: string;
	imgPath?: string;
	lastLoginTime?: Date;
	createdTime?: Date;
	isAdmin?: boolean;
}
