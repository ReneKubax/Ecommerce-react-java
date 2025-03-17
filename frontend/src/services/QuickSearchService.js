import ApiClient from './apiClient';

export default class QuickSearchService {
    static async fetch(query = '') {
        const params = new URLSearchParams();
        if (query) params.append('q', query);
        
        return ApiClient.get(`/search?${params.toString()}`);
    }
}