import { env } from '$env/dynamic/public';

export const API_URL =
	env.PUBLIC_API_URL ||
	(typeof import.meta !== 'undefined' &&
		import.meta.env &&
		(import.meta.env.VITE_API_URL || import.meta.env.PUBLIC_API_URL)) ||
	'http://localhost:8080';
