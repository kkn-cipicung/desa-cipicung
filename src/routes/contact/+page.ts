import type { PageLoad } from './$types';
import { ContactDetailRequest } from '../../module/contact/_request/request';

export const load: PageLoad = async () => {
	try {
		const contact = await ContactDetailRequest();
		return { contact };
	} catch (err) {
		console.error('Error fetching contact details:', err);
		return { contact: null };
	}
};
