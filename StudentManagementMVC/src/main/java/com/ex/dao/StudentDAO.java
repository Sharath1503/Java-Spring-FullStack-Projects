package com.ex.dao;

import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;

import com.ex.StudentEntity;
import com.ex.StudentRowMapper;

public class StudentDAO {
	
	private JdbcTemplate jdbcTemplate;
	
	

	
	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public int saveStudent(StudentEntity student) {
		// TODO Auto-generated method stub
		return jdbcTemplate.update("insert into studenttable(sname,roll,age) values(?,?,?)", student.getSname(), student.getRoll(), student.getAge());
		
	}

	public List<StudentEntity> DisplayAll() {
		// TODO Auto-generated method stub
		return jdbcTemplate.query("select * from studenttable", new StudentRowMapper());
	}

	public StudentEntity getbyId(int id) {
		// TODO Auto-generated method stub
		return jdbcTemplate.queryForObject("select * from studenttable where id=?",new StudentRowMapper(), id);
	}

	public int updateStudent(StudentEntity std) {
		// TODO Auto-generated method stub
		return jdbcTemplate.update("update studenttable set sname=?,roll=?,age=? where id=?", std.getSname(), std.getRoll(),std.getAge(),std.getId());
	}

	public int delete(int id) {
		// TODO Auto-generated method stub
		return jdbcTemplate.update("delete from studenttable where id=?", id);
	}

}
