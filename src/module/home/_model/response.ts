export interface DashboardResponse {
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
	media?: string | null;
	media_id?: number | string | null;
	is_active: boolean;
	created_at: string;
}
