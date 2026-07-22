import type { PageLoad } from './$types';
import {
	ProfileDetailRequest,
	RegionBoundaryRequest,
	VisionMissionRequest,
	GovernmentStructureRequest,
	ResourcePotentialRequest
} from '../../module/profile/_request/request';

export const load: PageLoad = async () => {
	const [profile, boundary, visionMission, structure, resources] = await Promise.all([
		ProfileDetailRequest({ id: 1 }).catch((err) => {
			console.error('Error fetching profile detail:', err.message || err);
			return null;
		}),
		RegionBoundaryRequest().catch((err) => {
			console.error('Error fetching region boundary:', err.message || err);
			return null;
		}),
		VisionMissionRequest().catch((err) => {
			console.error('Error fetching vision mission:', err.message || err);
			return null;
		}),
		GovernmentStructureRequest().catch((err) => {
			console.error('Error fetching government structure:', err.message || err);
			return [];
		}),
		ResourcePotentialRequest().catch((err) => {
			console.error('Error fetching resource potential:', err.message || err);
			return null;
		})
	]);

	return {
		profile,
		boundary,
		visionMission,
		structure: structure || [],
		resources
	};
};
