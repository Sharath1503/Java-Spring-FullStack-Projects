package com.ex;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.*;

public class StudentRowMapper implements RowMapper<StudentEntity> {

	@Override
	public StudentEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		StudentEntity student = new StudentEntity();
		student.setSname(rs.getString("sname"));
		student.setId(rs.getInt("id"));
		student.setRoll(rs.getInt("roll"));
		student.setAge(rs.getInt("age"));
		
		return student;
	}

	

	

}
