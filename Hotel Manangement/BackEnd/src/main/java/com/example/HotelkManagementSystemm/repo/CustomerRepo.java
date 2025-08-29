package com.example.HotelkManagementSystemm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.HotelkManagementSystemm.entity.CustomerEntity;

import jakarta.transaction.Transactional;

@Repository
public interface CustomerRepo extends JpaRepository<CustomerEntity, Long>{
	
}
