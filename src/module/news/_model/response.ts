export interface NewsResponse {
	id: number;
	category_id?: number;
	category_name?: string;
	category: {
		id: number;
		name: string;
	};
	uploader: {
		id: number;
		name: string;
	};
	title: string;
	description: string;
	media?: string | null;
	media_id?: number | string | null;
	source: string;
	created_at: string;
}

export interface NewsHeaderResponse {
	id: number;
	title: string;
}
