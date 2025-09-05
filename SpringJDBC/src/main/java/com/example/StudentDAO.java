package com.example;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;

public class StudentDAO {
	
	
	private final JdbcTemplate jdbcTemplate;
	
	public StudentDAO(JdbcTemplate jdbcTemplate)
	{
		this.jdbcTemplate=jdbcTemplate;
	}
	
	public int Register(StudentEntity student)
	{
		return jdbcTemplate.update("insert into student(roll,name,age) values(?,?,?)",student.getRoll(),student.getSname(),student.getAge());
	}
	
	public List<StudentEntity> findAll()
	{
		return jdbcTemplate.query("select * from student",new StudentRowMapper());
	}

	public StudentEntity findbyID(int roll) {
		// TODO Auto-generated method stub
		 return jdbcTemplate.queryForObject("select * from student where roll=?", new StudentRowMapper(), roll);
	}
	
	public int updateStudent(StudentEntity student, int roll1) {
        // Method to update student details in the database
        return jdbcTemplate.update("UPDATE student SET name = ?, age = ? WHERE roll = ?", student.getSname(), student.getAge(), roll1);
    }

	public int deleteStudent(int roll2) {
		// TODO Auto-generated method stub
		return jdbcTemplate.update("delete from student WHERE roll = ?", roll2);
	}
	
	

}
