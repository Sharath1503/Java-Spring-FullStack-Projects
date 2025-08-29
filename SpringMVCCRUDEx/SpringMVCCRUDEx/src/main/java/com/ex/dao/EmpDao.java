package com.ex.dao;

import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import com.ex.Emp;
import com.ex.EmpRowMapper;

public class EmpDao {
	JdbcTemplate template;

	public void setTemplate(JdbcTemplate template) {
		this.template = template;
	}

	public int save(Emp p) {
		String sql = "insert into Emp99(name,salary,designation) values('" + p.getName() + "'," + p.getSalary() + ",'"
				+ p.getDesignation() + "')";
		return template.update(sql);
	}

	public int update(Emp p) {
		String sql = "update Emp99 set name='" + p.getName() + "', salary=" + p.getSalary() + ",designation='"
				+ p.getDesignation() + "' where id=" + p.getId() + "";
		return template.update(sql);
	}

	public int delete(int id) {
		String sql = "delete from Emp99 where id=" + id + "";
		return template.update(sql);
	}

	public Emp getEmpById(int id) {
		String sql = "select * from Emp99 where id=?";
		return template.queryForObject(sql,new EmpRowMapper(),id);
	}

	public List<Emp> getEmployees() {
		return template.query("select * from Emp99", new EmpRowMapper() );
	}
}