export interface Headman {
	id: number;
	name: string;
	position: string;
	phone: string;
	email: string;
	description: string;
	order_number: number;
	is_active: boolean;
}

export interface ProfileResponse {
	id: number;
	name: string;
	province: string;
	regency: string;
	district: string;
	postal_code: string;
	address: string;
	phone: string;
	email: string;
	website: string;
	latitude: number;
	longitude: number;
	vision: string;
	mission: string[];
	history: string;
	description: string;
	region: string;
	hamlet_one: string;
	hamlet_two: string;
	total_family: number;
	total_rt: number;
	total_rw: number;
	rt_hamlet_one: number;
	rt_hamlet_two: number;
	rw_hamlet_one: number;
	rw_hamlet_two: number;
	north_border: string;
	east_border: string;
	south_border: string;
	west_border: string;
	area: string;
	population?: number;
	headman: Headman | null;
	headmen?: GovernmentStaff[] | null;
	created_at: string;
	updated_at: string;
}

export interface RegionBoundaryResponse {
	region: string;
	hamlet_one: string;
	hamlet_two: string;
	total_family: number;
	total_rt: number;
	total_rw: number;
	rt_hamlet_one: number;
	rt_hamlet_two: number;
	rw_hamlet_one: number;
	rw_hamlet_two: number;
	north_border: string;
	east_border: string;
	south_border: string;
	west_border: string;
	area: string;
	population: number;
}

export interface VisionMissionResponse {
	vision: string;
	mission: string[];
}

export interface GovernmentStaff {
	id: number;
	name: string;
	position: string;
	phone: string;
	email: string;
	description: string;
	order_number: number;
	is_active: boolean;
	start_date: string;
	finish_date: string | null;
}

export type GovernmentStructureResponse = GovernmentStaff[];

export interface ResourcePotentialResponse {
	title: string;
	detail: string;
	description: string;
}
