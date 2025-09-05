package com.example.HotelkManagementSystemm.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.HotelkManagementSystemm.entity.ItemEntity;
import com.example.HotelkManagementSystemm.entityDto.ItemDto;
import com.example.HotelkManagementSystemm.services.ItemService;



@RestController
@RequestMapping("/items")
public class ItemController {
	
	@Autowired
	ItemService itemservice;
	
	@PostMapping("/additem")
	public String insertItem(@RequestBody ItemDto item) {
		return itemservice.saveItem(item);
	}
	
	@GetMapping("/itembyid/{id}")
	public Optional<ItemEntity> Getbyid(@PathVariable long id)
	{
		return itemservice.getItemById(id);
		 
	}
	
	@GetMapping("/all")
	public List<ItemEntity> DisplayAll()
	{
		return itemservice.getAllItems();
		
	}
	
	@PutMapping("/update/{id}")
		public String updateItem(@PathVariable long id, @RequestBody ItemEntity item) {
		return itemservice.updateItem(id, item);
		}
	
	@DeleteMapping("/delete/{id}")
	public String deleteItem(@PathVariable long id) {
		return itemservice.deleteItem(id);
	}
	
	}
