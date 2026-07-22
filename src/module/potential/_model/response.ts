export interface PotentialResponse {
	id: number;
	category: {
		id: number;
		name: string;
	};
	title: string;
	subtitle: string;
	slug: string;
	description: string;
	location: {
		id: number;
	} | null;
	owner: {
		name: string;
		msisdn: string;
	};
	media?: string | null;
	media_id?: number | string | null;
	created_at: string;
}
