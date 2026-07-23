import type { ApiResponse } from '../../../utils/response';
import type { ListDashboardPayload } from '../_model/payload';
import type { DashboardResponse, DashboardOverviewResponse } from '../_model/response';
import axios from '../../../utils/axios';

export const DashboardListRequest = async (
	payload?: ListDashboardPayload
): Promise<DashboardResponse[]> => {
	const { data } = await axios.post<ApiResponse<DashboardResponse[]>>('/dashboard/list', payload);
	return data.data;
};

export const DashboardDetailRequest = async (): Promise<DashboardResponse> => {
	const { data } = await axios.post<ApiResponse<DashboardResponse>>('/dashboard/active');
	return data.data;
};

export const DashboardActiveRequest = async (): Promise<DashboardResponse> => {
	const { data } = await axios.post<ApiResponse<DashboardResponse>>('/dashboard/active');
	return data.data;
};

export const DashboardOverviewRequest = async (): Promise<DashboardOverviewResponse> => {
	const { data } = await axios.post<ApiResponse<DashboardOverviewResponse>>('/dashboard/overview');
	return data.data;
};
