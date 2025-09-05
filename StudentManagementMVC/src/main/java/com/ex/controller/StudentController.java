package com.ex.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cms.example.Student;
import com.ex.StudentEntity;
import com.ex.dao.StudentDAO;


@Controller
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	StudentDAO dao;
	
	@RequestMapping("/stdform")
	public String showform(Model m) {
		m.addAttribute("command", new StudentEntity());
		return "stdform";
	}
	
	@PostMapping("/save")
	public String insertStudent(@ModelAttribute("student") StudentEntity student){
		dao.saveStudent(student);
		return "redirect:/student/students";
	}
	
	@GetMapping("/students")
	public String DisplayStudent(Model m) {
		List <StudentEntity> students = dao.DisplayAll();
		System.out.println(students);
		m.addAttribute("studentslist",students);
		return "viewstudents";
	}
	
	@GetMapping("/editstudent/{id}")
	public String getStudentbyId(@PathVariable int id, Model m) {
		StudentEntity student = dao.getbyId(id);
		m.addAttribute("student", student);
		return "studenteditform";
	}
	
	@PostMapping("/updatesave")
	public String updateStudent123(@ModelAttribute("std") StudentEntity std) {
		dao.updateStudent(std);
		return "redirect:/student/students";
	}
	
	@GetMapping("/delete/{id}")
	public String DeleteStudent(@PathVariable int id) {
		dao.delete(id);
		return "redirect:/student/students";
		
	}

}
