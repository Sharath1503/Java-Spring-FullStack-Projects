package com.example;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class StudentRowMapper implements RowMapper<StudentEntity> {

	@Override
	public StudentEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
		StudentEntity student=new StudentEntity();
		student.setRoll(rs.getInt("roll"));
		student.setAge(rs.getInt("age"));
		student.setSname(rs.getString("name"));
		return student;
	}

	
}
