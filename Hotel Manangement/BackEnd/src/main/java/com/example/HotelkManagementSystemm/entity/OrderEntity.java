package com.example.HotelkManagementSystemm.entity;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="orders")
public class OrderEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long orderid;
	
	@ManyToOne
	private CustomerEntity customer;
	
	@Column
	private double ordervalue;
	
	@Column
	private Timestamp orderdate;
	

}
