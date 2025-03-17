import ApiClient from './apiClient';

export default class BrandsService {
    static async fetchAll() {
        return ApiClient.get('/brands');
    }

    static async fetchAdwSliders() {
        return ApiClient.get('/brands/adw-sliders');
    }
}