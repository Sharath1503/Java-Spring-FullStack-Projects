package com.ex;

import java.sql.Date;

public class AttendedStudentsEntity {
	
	private int id;
	private String branch;
	private int studentsattended;
	private Date attendancedate;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	public int getStudentsattended() {
		return studentsattended;
	}
	public void setStudentsattended(int studentsattended) {
		this.studentsattended = studentsattended;
	}
	public Date getAttendancedate() {
		return attendancedate;
	}
	public void setAttendancedate(Date attendancedate) {
		this.attendancedate = attendancedate;
	}
	@Override
	public String toString() {
		return "AttendedStudentsEntity [id=" + id + ", branch=" + branch + ", studentsattended=" + studentsattended
				+ ", attendancedate=" + attendancedate + "]";
	}
	
	

}
