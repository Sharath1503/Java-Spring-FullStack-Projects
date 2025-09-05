package com.example.HotelkManagementSystemm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.HotelkManagementSystemm.entity.AdminEntity;

@Repository
public interface AdminRepo extends JpaRepository<AdminEntity, Long>{
	
	public AdminEntity findByEmailAndPassword(String email, String password);


}
