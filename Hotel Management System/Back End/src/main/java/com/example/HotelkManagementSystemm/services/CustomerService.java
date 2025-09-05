package com.example.HotelkManagementSystemm.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.HotelkManagementSystemm.entity.CustomerEntity;
import com.example.HotelkManagementSystemm.entityDto.CustomerEntityDTO;
import com.example.HotelkManagementSystemm.repo.CustomerRepo;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepo customerrepo;
	
	public String insertCustomer(CustomerEntityDTO customer) {
		CustomerEntity customner1=new CustomerEntity();
		customner1.setAddress(customer.getAddress());
		customner1.setEmail(customer.getEmail());
		customner1.setName(customer.getName());
		customner1.setPhonenumber(customer.getPhonenumber());
		customerrepo.save(customner1);
		return "Customer saved successfully!";
	}
	
	public List<CustomerEntity> getAllCustomers()
	{
		return customerrepo.findAll();
	}
	
	public Optional<CustomerEntity> getbyId(long id){
		return customerrepo.findById(id);
	}
	
	public String deleteCustomer(long id)
	{
		customerrepo.deleteById(id);
		return "Customer deleted Successfully!";
	}
	
	public String updateCustomer(CustomerEntity upcustomer, long id)
	{
		CustomerEntity customer = customerrepo.findById(id).get();
		customer.setName(upcustomer.getName());
		customer.setEmail(upcustomer.getEmail());
		customer.setPhonenumber(upcustomer.getPhonenumber());
		customer.setAddress(upcustomer.getAddress());
		customerrepo.save(customer);
		return " Customer Updated Successfully!";
	}

}
