import type { ApiResponse } from '../../../utils/response';
import type { ContactResponse } from '../_model/response';
import axios from '../../../utils/axios';

export const ContactDetailRequest = async (): Promise<ContactResponse> => {
	const { data } = await axios.post<ApiResponse<ContactResponse>>('/contact/active');
	return data.data;
};

export const ContactActiveRequest = async (): Promise<ContactResponse> => {
	const { data } = await axios.post<ApiResponse<ContactResponse>>('/contact/active');
	return data.data;
};
