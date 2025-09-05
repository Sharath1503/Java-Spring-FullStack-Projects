package com.example.HotelkManagementSystemm.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.HotelkManagementSystemm.entity.ItemEntity;

public interface ItemRepo extends JpaRepository<ItemEntity, Long> {

}
