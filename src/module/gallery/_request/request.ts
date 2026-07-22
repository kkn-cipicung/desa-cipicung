import type { ApiResponse } from '../../../utils/response';
import type { ListGalleryPayload, GalleryDetailPayload } from '../_model/payload';
import type { GalleryListResponse, GalleryDetailResponse } from '../_model/response';
import axios from '../../../utils/axios';

export const GalleryListRequest = async (
	payload?: ListGalleryPayload
): Promise<GalleryListResponse[]> => {
	const { data } = await axios.post<ApiResponse<GalleryListResponse[]>>('/gallery/list', payload);
	return data.data;
};

export const GalleryDetailRequest = async (
	payload: GalleryDetailPayload
): Promise<GalleryDetailResponse> => {
	const { data } = await axios.post<ApiResponse<GalleryDetailResponse>>('/gallery/detail', payload);
	return data.data;
};
