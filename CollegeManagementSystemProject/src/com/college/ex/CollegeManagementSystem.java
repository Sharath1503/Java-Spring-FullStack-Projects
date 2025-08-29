package com.college.ex;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;

public class CollegeManagementSystem {
	ArrayList<Student> students = new ArrayList<Student>();

	public void AdminServices() throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int choice;
		do {
			System.out.println("1. Insert Student");
			System.out.println("2. Retreiving Students");
			System.out.println("3. Retreiving Student Details by Rollnumber");
			System.out.println("0.Exit");
			System.out.println("Choose Service : ");
			choice = Integer.parseInt(br.readLine());
			switch (choice) {
			case 1:
				InsertStudent();
				break;
			case 2:
				AllStudents();
				break;
			case 3:
				FindStrudentByRollnumber();
				break;
			case 0:
				System.exit(0);
			default:
				System.out.println("Invalid Choice......");
			}
		} while (choice != 0);
	}

	public void InsertStudent() throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Student student = new Student();
		System.out.println("Enter Student Name: ");
		student.setSname(br.readLine());
		System.out.println("Enter Student Rollnumber: ");
		student.setRoll(Integer.parseInt(br.readLine()));
		System.out.println("Enter Student Year: ");
		student.setYear(Integer.parseInt(br.readLine()));
		System.out.println("Enter Student Results: ");
		student.setResults(br.readLine());
		System.out.println("Enter Student CGPA: ");
		student.setCgpa(Float.parseFloat(br.readLine()));

		students.add(student);
	}

	public void AllStudents() {
		for (Student student : students) {

			System.out.println("\n\n\nStudent Name: " + student.getSname());
			System.out.println("Styudent RollNumger: " + student.getRoll());
			System.out.println("Student Year: " + student.getYear());
			System.out.println("Student Results: " + student.getResults());
			System.out.println("Stduent CGPA: " + student.getCgpa());

		}
	}

	public void FindStrudentByRollnumber() throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Enter Student Roll Number : ");
		int roll = Integer.parseInt(br.readLine());
		for (Student student : students) {

			if (student.getRoll() == roll) {

				System.out.println("\n\n\nStudent Name: " + student.getSname());
				System.out.println("Styudent RollNumger: " + student.getRoll());
				System.out.println("Student Year: " + student.getYear());
				System.out.println("Student Results: " + student.getResults());
				System.out.println("Stduent CGPA: " + student.getCgpa());
			}

		}
	}

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		int choice;
		CollegeManagementSystem obj = new CollegeManagementSystem();
		System.out.println("Welcome to College Management System");
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		do {
			System.out.println("1. Admin");
			System.out.println("2. Student");
			System.out.println("0. Exit\n");
			System.out.println("Enter your Choice :");
			choice = Integer.parseInt(br.readLine());

			switch (choice) {
			case 1:
				System.out.println("Enter Admin user name: ");
				String Aname = br.readLine();
				System.out.println("Enter Admin Password : ");
				String password = br.readLine();
				Admin admin = new Admin();
				if (admin.getAdminName().equals(Aname) && admin.getPassword().equals(password)) {
					obj.AdminServices();
				} else
					System.out.println("Incorrect Username or Password");
				break;
			case 2:
				obj.FindStrudentByRollnumber();
				break;
			case 0:
				System.exit(0);
			default:
				System.out.println("Invalid Choice......");
			}

		} while (choice != 0);

	}

}
