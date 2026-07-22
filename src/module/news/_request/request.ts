import type { ApiResponse } from '../../../utils/response';
import type {
	ListNewsPayload,
	NewsDetailPayload,
	NewsHeaderPayload,
	NewsFindByDatePayload
} from '../_model/payload';
import type { NewsResponse, NewsHeaderResponse } from '../_model/response';
import axios from '../../../utils/axios';

export const NewsListRequest = async (payload?: ListNewsPayload): Promise<NewsResponse[]> => {
	const { data } = await axios.post<ApiResponse<NewsResponse[]>>('/news/list', payload);
	return data.data;
};

export const NewsDetailRequest = async (payload: NewsDetailPayload): Promise<NewsResponse> => {
	const { data } = await axios.post<ApiResponse<NewsResponse>>('/news/detail', payload);
	return data.data;
};

export const NewsHeaderRequest = async (
	payload: NewsHeaderPayload
): Promise<NewsHeaderResponse> => {
	const { data } = await axios.post<ApiResponse<NewsHeaderResponse>>('/news/header', payload);
	return data.data;
};

export const NewsFindByDateRequest = async (
	payload: NewsFindByDatePayload
): Promise<NewsResponse[]> => {
	const { data } = await axios.post<ApiResponse<NewsResponse[]>>('/news/find-by-date', payload);
	return data.data;
};
