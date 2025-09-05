package com.example.HotelkManagementSystemm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.HotelkManagementSystemm.entity.OrderEntity;
import com.example.HotelkManagementSystemm.services.OrderServices;

@RestController
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	OrderServices orderServices;
	
	@PostMapping("/add/{cid}")
	public String PlaceOrder(@PathVariable("cid") long cid)
	{
		return orderServices.AddOrder(cid);
		
	}
	@GetMapping("/all")
	public List<OrderEntity> findAll()

	{
		return orderServices.findAll();
	}
	@GetMapping("/findbyid/{id}")
	public Optional<OrderEntity> findbyid(@PathVariable("id") long id)

	{
		return orderServices.findbyid(id);
	}
}
