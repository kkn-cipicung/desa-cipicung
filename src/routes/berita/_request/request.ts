import type { ApiResponse } from '../../../utils/response';
import type { NewsListModel, NewsDetailModel, NewsByDateModel } from '../_model/model';
import axios from '../../../utils/axios';

export const NewsListRequest = async (): Promise<ApiResponse<NewsListModel[]>> => {
    const { data } = await axios.post<ApiResponse<NewsListModel[]>>('/news/list');
    return data;
};

export const NewsDetailRequest = async (): Promise<ApiResponse<NewsDetailModel>> => {
    const { data } = await axios.post<ApiResponse<NewsDetailModel>>('/news/detail');
    return data;
};

export const NewsByDateRequest = async (): Promise<ApiResponse<NewsByDateModel[]>> => {
    const { data } = await axios.post<ApiResponse<NewsByDateModel[]>>('/news/find-by-date');
    return data;
};
