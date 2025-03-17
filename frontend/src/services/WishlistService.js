import ApiClient from './apiClient';

export default class WishlistService {
    static async add(id) {
        return ApiClient.post('/wishlist', { id });
    }

    static async fetchIds() {
        return ApiClient.get('/wishlist/ids');
    }

    static async fetchAll() {
        return ApiClient.get('/wishlist');
    }

    static async delete(ids) {
        const endpoint = Array.isArray(ids) 
            ? `/wishlist?ids=${ids.join(',')}` 
            : `/wishlist/${ids}`;
            
        return ApiClient.delete(endpoint);
    }
}