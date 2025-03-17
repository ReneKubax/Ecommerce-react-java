import ApiClient from './apiClient';

export default class CategoriesService {
    static async fetchAll() {
        try {
            return await ApiClient.get('/categories');
        } catch (error) {
            throw new Error('Some Server Error!');
        }
    }
    
    static async fetchOne(id) {
        try {
            return await ApiClient.get(`/categories/${id}`);
        } catch (error) {
            throw new Error(`Error fetching category ${id}`);
        }
    }
}