package com.example.HotelkManagementSystemm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotelkManagementSystemm.entity.CartEntity;
import com.example.HotelkManagementSystemm.entity.CustomerEntity;
import com.example.HotelkManagementSystemm.entity.ItemEntity;
import com.example.HotelkManagementSystemm.repo.CartRepo;
import com.example.HotelkManagementSystemm.repo.CustomerRepo;
import com.example.HotelkManagementSystemm.repo.ItemRepo;

@Service
public class CartService {

	@Autowired
	CartRepo cartRepo;
	@Autowired
	CustomerRepo customerRepo;
	@Autowired
	ItemRepo itemRepo;

	public String InsertCart(long cid, long iid) {
		CustomerEntity customer = customerRepo.findById(cid).get();
		ItemEntity item = itemRepo.findById(iid).get();
		CartEntity cart = customer.getCart();
		double total;
		if (cart == null) {
			cart = new CartEntity();
			customer.setCart(cart);
			
		}

		cart.getItems().add(item);

		total = cart.getTotal();
		total = total + item.getPrice();
		cart.setTotal(total);
		cartRepo.save(cart);
		return "cart inserted successfully";

	}

	public CartEntity findById(long id) {
		CartEntity cart=cartRepo.findById(id).get();
		System.out.println(cart);
		return cart;
	}

}
