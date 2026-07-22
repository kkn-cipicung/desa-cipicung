import type { ApiResponse } from '../../../../utils/response';
import type { CategoryListModel, CategoryDetailModel } from '../_model/model';
import axios from '../../../../utils/axios';
export const CategoryListRequest = async (): Promise<CategoryListModel[]> => {
	const { data } = await axios.post<ApiResponse<CategoryListModel[]>>('/category/list');
	return data.data;
};
export const CategoryDetailRequest = async (): Promise<CategoryDetailModel> => {
	const { data } = await axios.post<ApiResponse<CategoryDetailModel>>('/category/detail');
	return data.data;
};
