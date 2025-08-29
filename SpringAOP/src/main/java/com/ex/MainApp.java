package com.ex;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext ap = new ClassPathXmlApplicationContext("beans.xml");
		
		Service obj = ap.getBean(Service.class);
		int arr[] = {1,2,3};
		obj.display(arr);

	}

}
