package com.renekubax.app.helper;

import com.renekubax.app.domain.Cart;
import com.renekubax.app.domain.Order;
import com.renekubax.app.dto.CartDto;
import com.renekubax.app.dto.OrderDto;

public interface OrderMappingHelper {
	
	public static OrderDto map(final Order order) {
		return OrderDto.builder()
				.orderId(order.getOrderId())
				.orderDate(order.getOrderDate())
				.orderDesc(order.getOrderDesc())
				.orderFee(order.getOrderFee())
				.cartDto(
						CartDto.builder()
							.cartId(order.getCart().getCartId())
							.build())
				.build();
	}
	
	public static Order map(final OrderDto orderDto) {
		return Order.builder()
				.orderId(orderDto.getOrderId())
				.orderDate(orderDto.getOrderDate())
				.orderDesc(orderDto.getOrderDesc())
				.orderFee(orderDto.getOrderFee())
				.cart(
						Cart.builder()
							.cartId(orderDto.getCartDto().getCartId())
							.build())
				.build();
	}
	
	
	
}










