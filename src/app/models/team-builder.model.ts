export class TeamBuilderModel {
	constructor(
		public project_id: number,
		public role: number,
		public parent: number,
		public children: Array<number>,
	) { }
}