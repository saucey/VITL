import { get } from './axios';


export const getProducts = async () => {
	return await get('/products');
};

