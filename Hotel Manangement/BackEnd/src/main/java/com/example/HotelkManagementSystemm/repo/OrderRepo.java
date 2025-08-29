package com.example.HotelkManagementSystemm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HotelkManagementSystemm.entity.OrderEntity;

public interface OrderRepo extends JpaRepository<OrderEntity, Long> {

}
