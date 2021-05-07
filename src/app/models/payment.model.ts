export class PaymentModel {
	constructor(
		public amount: number,
		public project_id: number,
		public user_id: number,
		public created_at?: string,
		public id?: number
	) { }
}