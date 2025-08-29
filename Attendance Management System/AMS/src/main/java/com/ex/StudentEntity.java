package com.ex;

public class StudentEntity {
	
	private int id;
	private String sname;
	private int roll;
	private String branch;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public int getRoll() {
		return roll;
	}
	public void setRoll(int roll) {
		this.roll = roll;
	}
	public String getBranch() {
		return branch;
	}
	public void setBranch(String branch) {
		this.branch = branch;
	}
	
	@Override
	public String toString() {
		return "StudentEntity [id=" + id + ", sname=" + sname + ", roll=" + roll + ", branch=" + branch + "]";
	}
	
	
	

}
