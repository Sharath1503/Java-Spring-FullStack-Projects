package com.example;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.util.SystemPropertyUtils;

public class MainApplication {

	public static void main(String[] args) throws NumberFormatException, IOException {
		// TODO Auto-generated method stub
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		ApplicationContext ap = new ClassPathXmlApplicationContext("beans.xml");
		StudentEntity student = new StudentEntity();
		StudentDAO obj = (StudentDAO) ap.getBean("studentDao");
		int choice;
		do {
			System.out.println("1.Register");
			System.out.println("2.show all students");
			System.out.println("3.Find By ID");
			System.out.println("4.Update Student Details");
			System.out.println("5.Delete Student");
			System.out.println("Enter your Choice: ");
			choice = Integer.parseInt(br.readLine());
			switch (choice) {
			case 1:
				System.out.println("Enter Student name:");
				student.setSname(br.readLine());
				System.out.println("Enter Student Roll: ");
				student.setRoll(Integer.parseInt(br.readLine()));
				System.out.println("Enter Student Age: ");
				student.setAge(Integer.parseInt(br.readLine()));
				obj.Register(student);
				System.out.println("Registered Successfully...");
				break;
			case 2:
				List<StudentEntity> students = obj.findAll();
				for (StudentEntity student1 : students) {
					System.out.println("Name : " + student1.getSname() + " Age : " + student1.getAge() + " Roll : "
							+ student1.getRoll());
				}
				break;
			case 3:
				System.out.println("Enter Student ROll NO: ");
				int roll = Integer.parseInt(br.readLine());
				StudentEntity student1=obj.findbyID(roll);
				System.out.println("Name : " + student1.getSname() + " Age : " + student1.getAge());
				break;
			case 4:
				 System.out.println("Enter Student Roll No to Update: ");
	                int roll1 = Integer.parseInt(br.readLine());
	                System.out.println("Enter New Name: ");
	                String newName = br.readLine();
	                System.out.println("Enter New Age: ");
	                int newAge = Integer.parseInt(br.readLine());
	                StudentEntity student2 = new StudentEntity();
	                student2.setSname(newName);
	                student2.setAge(newAge);
	                int result = obj.updateStudent(student2, roll1);
	                if (result > 0) {
	                    System.out.println("Student updated successfully.");
	                }
	                break;
			case 5:
				System.out.println("Enter Student Roll No to Delete: ");
				int roll2 = Integer.parseInt(br.readLine());
				int d = obj.deleteStudent(roll2);
                if (d > 0) {
                    System.out.println("Student deleted successfully.");
                }
                break;
			}
		} while (choice != 0);

	}

}
