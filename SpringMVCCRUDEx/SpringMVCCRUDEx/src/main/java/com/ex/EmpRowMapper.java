package com.ex;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class EmpRowMapper implements RowMapper<Emp>{

	@Override
	public Emp mapRow(ResultSet rs, int rowNum) throws SQLException {
		Emp e = new Emp();
		e.setId(rs.getInt(1));
		e.setName(rs.getString(2));
		e.setSalary(rs.getFloat(3));
		e.setDesignation(rs.getString(4));
		return e;
		
	}

}
