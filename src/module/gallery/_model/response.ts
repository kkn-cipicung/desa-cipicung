export interface GalleryListResponse {
	id: number;
	title: string;
	image: string;
}

export interface GalleryDetailResponse {
	title: string;
	image: string;
	description: string;
	category: {
		id: number;
		name: string;
	}[];
}
