export interface ContactResponse {
	office: {
		name: string;
		address: string;
		district: string;
		regency: string;
		province: string;
		postal_code: string;
	};
	contact: {
		email: string;
		phone: string;
		website: string;
	};
	social_media: {
		name: string;
		username: string;
	}[];
	service_hour: {
		day: string;
		time: string;
	}[];
}
