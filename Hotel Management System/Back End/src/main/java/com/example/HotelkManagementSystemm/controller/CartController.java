package com.example.HotelkManagementSystemm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.HotelkManagementSystemm.entity.CartEntity;
import com.example.HotelkManagementSystemm.services.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {
	
	@Autowired
	CartService cartService;
	
	@PostMapping("/add/{cid}/{iid}")
	public String addCart(@PathVariable("cid") long cid,@PathVariable("iid") long iid )
	{
		
		return cartService.InsertCart(cid,iid);
	}
	
	@GetMapping("/getbyid/{id}")
	public CartEntity findbyId(@PathVariable("id") long id)
	{
		return cartService.findById(id);
	}
	

}
