import type { ApiResponse } from '../../../utils/response';
import type { MapResponse } from '../_model/response';
import axios from '../../../utils/axios';

export const MapDetailRequest = async (): Promise<MapResponse> => {
	const { data } = await axios.post<ApiResponse<MapResponse>>('/map/detail');
	return data.data;
};

export const MapActiveRequest = async (): Promise<MapResponse> => {
	const { data } = await axios.post<ApiResponse<MapResponse>>('/map/active');
	return data.data;
};
