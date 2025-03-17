import ApiClient from './apiClient';

class CartService {
    static async add(productData) {
        return ApiClient.post('/cart', productData);
    }

    static async getAvailableQuantity(quantityData) {
        return ApiClient.get(`/cart/available-quantity/${quantityData.id}?qty=${quantityData.qty}`);
    }
    
    static async getCart() {
        return ApiClient.get('/cart');
    }
    
    static async updateQuantity(id, qty) {
        return ApiClient.put(`/cart/${id}`, { qty });
    }
    
    static async removeItem(id) {
        return ApiClient.delete(`/cart/${id}`);
    }
}

export { CartService };