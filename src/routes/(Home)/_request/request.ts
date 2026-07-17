import type { ApiResponse } from '../../../utils/response';
import type { DashboardListModel, DashboardDetailModel } from '../_model/model';
import axios from '../../../utils/axios';

export const DashboardListRequest = async (): Promise<ApiResponse<DashboardListModel[]>> => {
    const { data } = await axios.post<ApiResponse<DashboardListModel[]>>('/dashboard/list');
    return data;
};

export const DashboardDetailRequest = async (): Promise<ApiResponse<DashboardDetailModel>> => {
    const { data } = await axios.post<ApiResponse<DashboardDetailModel>>('/dashboard/detail');
    return data;
};
