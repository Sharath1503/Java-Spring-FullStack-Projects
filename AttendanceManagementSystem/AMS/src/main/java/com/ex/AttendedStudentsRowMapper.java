package com.ex;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

public class AttendedStudentsRowMapper implements RowMapper<AttendedStudentsEntity> {

	@Override
	public AttendedStudentsEntity mapRow(ResultSet rs, int rowNum) throws SQLException {
		// TODO Auto-generated method stub
		AttendedStudentsEntity students = new AttendedStudentsEntity();
		students.setId(rs.getInt("id"));
		students.setBranch(rs.getString("branch"));
		students.setStudentsattended(rs.getInt("studentsattended"));
		students.setAttendancedate(rs.getDate("attendancedate"));
		return students;
	}

}
