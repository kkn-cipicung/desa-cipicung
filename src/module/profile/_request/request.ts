import type { ApiResponse } from '../../../utils/response';
import type { ProfileDetailPayload } from '../_model/payload';
import type {
	ProfileResponse,
	RegionBoundaryResponse,
	VisionMissionResponse,
	GovernmentStructureResponse,
	ResourcePotentialResponse,
	GovernmentStaff
} from '../_model/response';
import axios from '../../../utils/axios';

export const ProfileDetailRequest = async (
	payload: ProfileDetailPayload
): Promise<ProfileResponse> => {
	const { data } = await axios.post<ApiResponse<ProfileResponse>>('/profile/detail', payload);
	return data.data;
};

export const ProfileActiveRequest = async (): Promise<ProfileResponse> => {
	const { data } = await axios.post<ApiResponse<ProfileResponse>>('/profile/detail');
	return data.data;
};

export const RegionBoundaryRequest = async (): Promise<RegionBoundaryResponse> => {
	const { data } = await axios.post<ApiResponse<RegionBoundaryResponse>>(
		'/profile/region-boundary'
	);
	return data.data;
};

export const VisionMissionRequest = async (): Promise<VisionMissionResponse> => {
	const { data } = await axios.post<ApiResponse<VisionMissionResponse>>('/profile/vision-mission');
	return data.data;
};

export const GovernmentStructureRequest = async (): Promise<GovernmentStructureResponse> => {
	const { data } = await axios.post<ApiResponse<GovernmentStructureResponse>>(
		'/profile/government-structure'
	);
	return data.data;
};

export const ResourcePotentialRequest = async (): Promise<ResourcePotentialResponse> => {
	const { data } = await axios.post<ApiResponse<ResourcePotentialResponse>>(
		'/profile/resource-potential'
	);
	return data.data;
};

export const OfficialListRequest = async (): Promise<GovernmentStaff[]> => {
	const { data } = await axios.post<ApiResponse<GovernmentStaff[]>>('/profile/official/list');
	return data.data;
};
