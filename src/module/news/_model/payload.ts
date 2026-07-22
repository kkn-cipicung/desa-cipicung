export interface ListNewsPayload {
	limit?: number;
	index?: number;
}

export interface NewsDetailPayload {
	id: number;
}

export interface NewsHeaderPayload {
	id: number;
}

export interface NewsFindByDatePayload {
	date: string; // YYYY-MM-DD
}
