package com.example.HotelkManagementSystemm.services;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotelkManagementSystemm.entity.CartEntity;
import com.example.HotelkManagementSystemm.entity.CustomerEntity;
import com.example.HotelkManagementSystemm.entity.OrderEntity;
import com.example.HotelkManagementSystemm.repo.CartRepo;
import com.example.HotelkManagementSystemm.repo.CustomerRepo;
import com.example.HotelkManagementSystemm.repo.OrderRepo;

@Service
public class OrderServices {
	
	@Autowired
	OrderRepo orderRepo;
	@Autowired
	CustomerRepo customerRepo;
	
	@Autowired
	CartRepo cartRepo;
	
	public String AddOrder(long cid)
	{
		CustomerEntity customer=customerRepo.findById(cid).get();
		OrderEntity order=new OrderEntity();
		CartEntity cart=customer.getCart();
		order.setOrdervalue(cart.getTotal());
		order.setCustomer(customer);
		order.setOrderdate(new Timestamp(System.currentTimeMillis()));
		orderRepo.save(order);		
		return "Order Place Successfully";
	}
	public List<OrderEntity> findAll()
	{
		return orderRepo.findAll();
	}
	public Optional<OrderEntity> findbyid(long id) {
		// TODO Auto-generated method stub
		return orderRepo.findById(id);
	}

}
