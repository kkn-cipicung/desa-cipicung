export interface NewsListModel {
	id: number;
	category_id: number;
	category_name: string;
	uploaded_by: number;
	uploader_name: string;
	title: string;
	description: string;
	created_at: string;
}

export interface NewsDetailModel {
	id: number;
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
	created_at: string;
}

export interface NewsByDateModel {
	id: number;
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
	created_at: string;
}
