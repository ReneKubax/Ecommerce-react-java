package com.renekubax.app.helper;

import com.renekubax.app.domain.OrderItem;
import com.renekubax.app.dto.OrderDto;
import com.renekubax.app.dto.OrderItemDto;
import com.renekubax.app.dto.ProductDto;

public interface OrderItemMappingHelper {
	
	public static OrderItemDto map(final OrderItem orderItem) {
		return OrderItemDto.builder()
				.productId(orderItem.getProductId())
				.orderId(orderItem.getOrderId())
				.orderedQuantity(orderItem.getOrderedQuantity())
				.productDto(
						ProductDto.builder()
							.productId(orderItem.getProductId())
							.build())
				.orderDto(
						OrderDto.builder()
							.orderId(orderItem.getOrderId())
							.build())
				.build();
	}
	
	public static OrderItem map(final OrderItemDto orderItemDto) {
		return OrderItem.builder()
				.productId(orderItemDto.getProductId())
				.orderId(orderItemDto.getOrderId())
				.orderedQuantity(orderItemDto.getOrderedQuantity())
				.build();
	}
	
	
	
}










