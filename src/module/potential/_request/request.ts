import type { ApiResponse } from '../../../utils/response';
import type { ListPotentialPayload, PotentialDetailPayload } from '../_model/payload';
import type { PotentialResponse } from '../_model/response';
import axios from '../../../utils/axios';

export const PotentialListRequest = async (
	payload?: ListPotentialPayload
): Promise<PotentialResponse[]> => {
	const { data } = await axios.post<ApiResponse<PotentialResponse[]>>('/potential/list', payload);
	return data.data;
};

export const PotentialDetailRequest = async (
	payload: PotentialDetailPayload
): Promise<PotentialResponse> => {
	const { data } = await axios.post<ApiResponse<PotentialResponse>>('/potential/detail', payload);
	return data.data;
};
