import axios from 'axios';
import { API } from '../../constants'

export const get = async (relativeUrl, isBearer) => {
	try {
		const URL = API + relativeUrl
		return await axios.get(URL);
	} catch (error) {
		throw error;
	}
};
