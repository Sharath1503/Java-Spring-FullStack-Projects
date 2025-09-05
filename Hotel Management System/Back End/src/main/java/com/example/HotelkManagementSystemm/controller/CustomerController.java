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

import com.example.HotelkManagementSystemm.entity.CustomerEntity;
import com.example.HotelkManagementSystemm.entityDto.CustomerEntityDTO;
import com.example.HotelkManagementSystemm.services.CustomerService;



@RestController
@RequestMapping("/customers")
public class CustomerController {
	
	@Autowired
	CustomerService customerservice;
	
	@PostMapping("/addcustomer")
	public String addCustomer(@RequestBody CustomerEntityDTO customer) {
		customerservice.insertCustomer(customer);
		return " Customer Inserted Successfully!";
	}
	
	@GetMapping("/customerbyid/{id}")
	public Optional<CustomerEntity> getbyId( @PathVariable long id){
		Optional<CustomerEntity> customer = customerservice.getbyId(id);
		return customer;
	}
	
	@GetMapping("/all")
	public List<CustomerEntity> DisplayAll(){
		return customerservice.getAllCustomers();
	}
	
	@PutMapping("/updatecustomer/{id}")
	public String updateCustomer(@PathVariable long id, @RequestBody CustomerEntity customer)
	{
		return customerservice.updateCustomer(customer, id);
	}
	
	@DeleteMapping("/delete/{id}")
	public String DeleteCustomer(@PathVariable long id) {
		return customerservice.deleteCustomer(id);
	}

}
