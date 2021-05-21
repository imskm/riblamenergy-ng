export class TeamMoverModel {
	constructor(
		public src_project_id: number,
		public dest_project_id: number,
		public parent: number,
		public child: number,
	) { }
}