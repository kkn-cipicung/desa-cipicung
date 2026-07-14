import type { ApiResponse } from '../../../../utils/response';
import type { CategoryListModel, CategoryDetailModel } from '../_model/model';
import axios from '../../../../utils/axios';

export const CategoryListRequest = async (): Promise<ApiResponse<CategoryListModel[]>> => {
	const { data } = await axios.post<ApiResponse<CategoryListModel[]>>('/category/list');
	return data;
};

export const CategoryDetailRequest = async (): Promise<ApiResponse<CategoryDetailModel>> => {
	const { data } = await axios.post<ApiResponse<CategoryDetailModel>>('/category/detail');
	return data;
};
