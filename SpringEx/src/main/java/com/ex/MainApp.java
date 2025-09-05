package com.ex;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.ex2.Service2;

public class MainApp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext ap = new ClassPathXmlApplicationContext("beans.xml");

		Service obj = ap.getBean(Service.class);
		Service2 obj1 = ap.getBean(Service2.class);
		obj.display();
		obj1.display();
		
		
	}

}
