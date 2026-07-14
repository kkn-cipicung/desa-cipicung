export interface DashboardListModel {
	id: number;
	creator: {
		id: number;
		name: string;
	};
	category: {
		id: number;
		name: string;
	};
	title: string;
	description: string;
	created_at: string;
}

export interface DashboardDetailModel {
	id: number;
	creator: {
		id: number;
		name: string;
	};
	category: {
		id: number;
		name: string;
	};
	title: string;
	description: string;
	created_at: string;
}
