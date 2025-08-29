package com.ems.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Iterator;

public class EmployeeManagementSystem {
	ArrayList<Employee> employees = new ArrayList<>();

	public EmployeeManagementSystem() {
	}

	public void sortingDataBySalary() {

		ArrayList<Employee> sortedemployees = new ArrayList<Employee>();
		sortedemployees.addAll(employees);

		for (Employee employee : sortedemployees) {
			for (Employee employee1 : sortedemployees.subList(sortedemployees.indexOf(employee) + 1,
					sortedemployees.size())) {
				if (employee.getSalary() > employee1.getSalary()) {
					Employee tempEmp = new Employee();

					tempEmp.setId(employee.getId());
					tempEmp.setDepartment(employee.getDepartment());
					tempEmp.setName(employee.getName());
					tempEmp.setPosition(employee.getPosition());
					tempEmp.setSalary(employee.getSalary());

					employee.setId(employee1.getId());
					employee.setDepartment(employee1.getDepartment());
					employee.setName(employee1.getName());
					employee.setPosition(employee1.getPosition());
					employee.setSalary(employee1.getSalary());

					employee1.setId(tempEmp.getId());
					employee1.setDepartment(tempEmp.getDepartment());
					employee1.setName(tempEmp.getName());
					employee1.setPosition(tempEmp.getPosition());
					employee1.setSalary(tempEmp.getSalary());

				}
			}

		}
		for (Employee employee : sortedemployees) {
			System.out.println("\n\n\nEmployee Name: " + employee.getName());
			System.out.println("Employee ID: " + employee.getId());
			System.out.println("Employee Department: " + employee.getDepartment());
			System.out.println("Employee Position: " + employee.getPosition());
			System.out.println("Employee Salary: " + employee.getSalary());
		}
	}

	public void adminServices() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int choice;
		do {
			System.out.println("1. Insert Employee");
			System.out.println("2. Retrieve All Employees");
			System.out.println("3. Retrieve Employee Details by ID");
			System.out.println("4. Sorting Data by Employee Salary");
			System.out.println("0. Exit");
			System.out.println("Choose Service : ");
			choice = Integer.parseInt(br.readLine());
			switch (choice) {
			case 0:
				System.exit(0);

			case 1:
				insertEmployee();
				break;
			case 2:
				displayAllEmployees();
				break;
			case 3:
				findEmployeeByID();
				break;
			case 4:
				sortingDataBySalary();
				break;
			default:
				System.out.println("Invalid Choice......");

			}
		} while (choice != 0);
	}

	public void insertEmployee() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Employee employee = new Employee();
		System.out.println("Enter Employee Name: ");
		employee.setName(br.readLine());
		System.out.println("Enter Employee ID: ");
		employee.setId(Integer.parseInt(br.readLine()));
		System.out.println("Enter Employee Department: ");
		employee.setDepartment(br.readLine());
		System.out.println("Enter Employee Position: ");
		employee.setPosition(br.readLine());
		System.out.println("Enter Employee Salary: ");
		employee.setSalary(Double.parseDouble(br.readLine()));
		employees.add(employee);
	}

	public void displayAllEmployees() {
		Iterator<Employee> iterator = employees.iterator();
		while (iterator.hasNext()) {
			Employee employee = iterator.next();
			System.out.println("\n\n\nEmployee Name: " + employee.getName());
			System.out.println("Employee ID: " + employee.getId());
			System.out.println("Employee Department: " + employee.getDepartment());
			System.out.println("Employee Position: " + employee.getPosition());
			System.out.println("Employee Salary: " + employee.getSalary());
		}
	}

	public void findEmployeeByID() throws NumberFormatException, IOException {
		int temp = 0;
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Enter Employee ID: ");
		int id = Integer.parseInt(br.readLine());
		Iterator<Employee> iterator = employees.iterator();
		while (iterator.hasNext()) {
			Employee employee = iterator.next();
			if (employee.getId() == id)
				temp = 1;
			{
				System.out.println("\n\n\nEmployee Name: " + employee.getName());
				System.out.println("Employee ID: " + employee.getId());
				System.out.println("Employee Department: " + employee.getDepartment());
				System.out.println("Employee Position: " + employee.getPosition());
				System.out.println("Employee Salary: " + employee.getSalary());
			}

			if (temp == 0) {
				System.out.println("Invalid ID\n");
			}
		}
	}

	public static void main(String[] args) throws IOException {
		EmployeeManagementSystem obj = new EmployeeManagementSystem();
		System.out.println("Welcome to Employee Management System");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int choice;
		do {
			System.out.println("1. Admin");
			System.out.println("0. Exit\n");
			System.out.println("Enter your Choice :");
			choice = Integer.parseInt(br.readLine());
			switch (choice) {
			case 0:
				System.exit(0);
			default:
				System.out.println("Invalid Choice......");
				break;
			case 1:
				System.out.println("Enter Admin user name: ");
				String adminName = br.readLine();
				System.out.println("Enter Admin Password : ");
				String password = br.readLine();
				Admin admin = new Admin();
				if (admin.getAdminName().equals(adminName) && admin.getPassword().equals(password)) {
					obj.adminServices();
					break;
				}
				System.out.println("Incorrect Username or Password");
				break;
			}
		} while (choice != 0);
	}
}