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

import com.example.HotelkManagementSystemm.entity.AdminEntity;
import com.example.HotelkManagementSystemm.services.AdminService;


@RestController
@RequestMapping("/admins")
public class AdminController {

	@Autowired
	private AdminService adminService;

	@PostMapping("/addadmin")
	public String createAdmin(@RequestBody AdminEntity admin) {
		return adminService.insertAdmin(admin);
	}

	@GetMapping("/adminbyid/{id}")
	public Optional<AdminEntity> getAdminById(@PathVariable Long id) {
		Optional<AdminEntity> admin = adminService.getAdminById(id);
		return admin;
	}

	@GetMapping("/all")
	public List<AdminEntity> getAllAdmins() {
		return adminService.getAllAdmins();
	}

	@PutMapping("/updateadmin/{id}")
	public String updateAdmin(@PathVariable Long id, @RequestBody AdminEntity adminDetails) {
		return adminService.UpdateEmployee(id, adminDetails);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteAdmin(@PathVariable Long id) {
		return adminService.deleteAdmin(id);

	}
	
	@PostMapping("/login")
	public String LoginCheck(@RequestBody AdminEntity admin)
	{
		return adminService.Login(admin);
	}

}
