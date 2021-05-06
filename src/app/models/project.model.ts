import { ClientModel } from './client.model';

export class ProjectModel {
	constructor(
		public title: string,
		public revenue: number,
		public commission_rate: number,
		public client_id: number,
		public created_at?: string,
		public tax?: number,
		public net_revenue?: number,
		public commission_amount?: number,
		public paid_amount?: number,
		public id?: number,
	) { }
}