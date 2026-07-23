import type { PageLoad } from './$types';
import { DashboardActiveRequest, DashboardOverviewRequest } from '../../module/home/_request/request';
import { NewsListRequest } from '../../module/news/_request/request';
import { PotentialListRequest } from '../../module/potential/_request/request';

export const load: PageLoad = async () => {
	const [activeDashboard, overview, newsList, potentialList] = await Promise.all([
		DashboardActiveRequest().catch((err) => {
			console.error('Error fetching active dashboard:', err.message || err);
			return null;
		}),
		DashboardOverviewRequest().catch((err) => {
			console.error('Error fetching dashboard overview:', err.message || err);
			return null;
		}),
		NewsListRequest({ limit: 6, index: 0 }).catch((err) => {
			console.error('Error fetching news list:', err.message || err);
			return [];
		}),
		PotentialListRequest({ limit: 6, index: 0 }).catch((err) => {
			console.error('Error fetching potential list:', err.message || err);
			return [];
		})
	]);

	return {
		activeDashboard,
		overview,
		newsList: newsList || [],
		potentialList: potentialList || []
	};
};
