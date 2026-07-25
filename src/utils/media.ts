import { API_URL } from './core';

export function getMediaUrl(media: number | string | null | undefined) {
	return getMediaUrlCandidates(media)[0] || '';
}

export function getMediaUrlCandidates(media: number | string | null | undefined) {
	if (media === null || media === undefined || media === '') return [];

	const raw = String(media).trim().replace(/^#/, '');
	if (!raw) return [];

	if (raw.startsWith('data:')) {
		return [raw];
	}

	const baseUrl = (API_URL || '').replace(/\/$/, '').replace(/\/api\/?$/, '');

	const cleanPath = raw.replace(/^https?:\/\/[^/]+\//, '').replace(/^\//, '');

	if (/^\d+$/.test(cleanPath)) {
		return [
			`${baseUrl}/api/media/${cleanPath}`,
			`${baseUrl}/api/media?id=${cleanPath}`,
			`${baseUrl}/media/${cleanPath}`,
			`${baseUrl}/media?id=${cleanPath}`,
			`${baseUrl}/uploads/${cleanPath}`
		];
	}

	return [`${baseUrl}/${cleanPath}`];
}
