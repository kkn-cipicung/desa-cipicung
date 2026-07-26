export interface InfografisResponse {
	summary: {
		population: number;
		family: number;
		male: number;
		female: number;
	};
	hamlets: { label: string; value: number; color?: string }[];
	religions: { label: string; value: number; color?: string }[];
	religion_rt: { label: string; value: number; value2?: number }[];
	education: { label: string; male: number; female: number }[];
	occupation: { label: string; male: number; female: number }[];
	ages: { label: string; value: number }[];
	source: string;
}
