package com.example.HotelkManagementSystemm.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.HotelkManagementSystemm.entity.AdminEntity;
import com.example.HotelkManagementSystemm.repo.AdminRepo;

@Service
public class AdminService {

	@Autowired
	AdminRepo adminrepo;

	public String insertAdmin(AdminEntity admin) {
		adminrepo.save(admin);
		return "Admin saved successfully!";
	}

	public List<AdminEntity> getAllAdmins() {
		return adminrepo.findAll();
	}

	public Optional<AdminEntity> getAdminById(Long id) {
		Optional<AdminEntity> admin=   adminrepo.findById(id);
		return admin;
	}

	public String deleteAdmin(Long id) {
		adminrepo.deleteById(id);
		return "Admin deleted Successfully!";
	}

	public String UpdateEmployee(long id, AdminEntity admindetails) {
		AdminEntity admin = adminrepo.findById(id).get();
		admin.setName(admindetails.getName());
		admin.setEmail(admindetails.getEmail());
		admin.setPassword(admindetails.getPassword());
		return "Employee Updated Successfully!";
	}

	public String Login(AdminEntity admin) {
		AdminEntity admin1 = adminrepo.findByEmailAndPassword(admin.getEmail(), admin.getPassword());
		if(admin1!=null)
		{
			return "Login Success";
		}
		else
			return "Incorrect username or password";
	}
	
}
