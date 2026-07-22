import type { ApiResponse } from '../../../utils/response';
import type { ContactResponse } from '../_model/response';
import axios from '../../../utils/axios';

export const ContactDetailRequest = async (): Promise<ContactResponse> => {
	const { data } = await axios.post<ApiResponse<ContactResponse>>('/contact/detail');
	return data.data;
};
