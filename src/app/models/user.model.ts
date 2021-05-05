export class UserModel {
	constructor(
		public first_name: string,
		public last_name: string,
		public gender: number,
		public role: number,
		public email: string,
		public password: string,
		public confirm_password: string,
		public phone?: string,
		public created_at?: string,
		public id?: number,
	) { }
}