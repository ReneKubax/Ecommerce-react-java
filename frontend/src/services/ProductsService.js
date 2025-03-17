import ApiClient from './apiClient';

export default class ProductsService {
    static async fetchBrandnew() {
        try {
            return await ApiClient.get('/products/brandnew');
        } catch (error) {
            throw new Error('Some error occurred!');
        }
    }

    static async fetchTopseller() {
        try {
            return await ApiClient.get('/products/topseller');
        } catch (error) {
            throw new Error('Some error occurred!');
        }
    }

    static async fetchAll(limit = 0, generateRandomId = false) {
        const params = new URLSearchParams();
        if (limit) params.append('limit', limit);
        if (generateRandomId) params.append('randomId', 'true');
        
        const endpoint = `/products?${params.toString()}`;
        return ApiClient.get(endpoint);
    }

    static async fetchFilters() {
        return ApiClient.get('/products/filters');
    }

    static async fetchOne(id) {
        return ApiClient.get(`/products/${id}`);
    }

    static async fetchProductComments({ productId, parentId = 0, limit = 10, start = 0 }) {
        const params = new URLSearchParams();
        params.append('parentId', parentId);
        params.append('limit', limit);
        params.append('start', start);
        
        return ApiClient.get(`/products/${productId}/comments?${params.toString()}`);
    }

    static async likeProductComment({ productId, commentId }) {
        return ApiClient.post(`/products/${productId}/comments/${commentId}/like`);
    }

    static async addProductCommentReply(params) {
        const { productId, commentId, ...commentData } = params;
        return ApiClient.post(`/products/${productId}/comments/${commentId}/reply`, commentData);
    }

    static async saveProductComment(values) {
        const { productId, ...commentData } = values;
        return ApiClient.post(`/products/${productId}/comments`, commentData);
    }
}