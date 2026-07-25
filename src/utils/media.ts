import { API_URL } from './core';

export function getMediaUrl(media: number | string | null | undefined) {
	return getMediaUrlCandidates(media)[0] || '';
}

export function getMediaUrlCandidates(media: number | string | null | undefined) {
	if (media === null || media === undefined || media === '') return [];

	let value = String(media).trim().replace(/^#/, '');
	if (!value) return [];

	const baseUrl = (API_URL || '').replace(/\/$/, '').replace(/\/api\/?$/, '');

	if (value.startsWith('http://localhost') || value.startsWith('http://127.0.0.1')) {
		if (baseUrl) {
			value = value.replace(/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?/, baseUrl);
		}
	}

	if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:')) {
		return [value];
	}

	const normalizedPath = value.replace(/^\//, '');

	if (/^\d+$/.test(value)) {
		return [
			`${baseUrl}/api/media/${value}`,
			`${baseUrl}/api/media?id=${value}`,
			`${baseUrl}/media/${value}`,
			`${baseUrl}/media?id=${value}`,
			`${baseUrl}/uploads/${value}`
		];
	}

	return [`${baseUrl}/${normalizedPath}`];
}
