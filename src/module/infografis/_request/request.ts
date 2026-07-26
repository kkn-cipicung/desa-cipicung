import type { ApiResponse } from '../../../utils/response';
import axios from '../../../utils/axios';
import type { InfografisResponse } from '../_model/response';

export const InfografisDetailRequest = async (): Promise<InfografisResponse> => {
	const { data } = await axios.post<ApiResponse<InfografisResponse>>('/infografis/detail');
	return data.data;
};
