package com.example.HotelkManagementSystemm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.HotelkManagementSystemm.entity.CartEntity;

import jakarta.transaction.Transactional;

public interface CartRepo extends JpaRepository<CartEntity, Long>{
	
	

}
