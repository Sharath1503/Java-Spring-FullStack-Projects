package com.ex;

import org.aspectj.lang.*;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.aspectj.lang.annotation.Before;

@Aspect
public class AspectEx {

	@Before("execution(* com.ex.Service.*(..))")
	void loggingAspect(JoinPoint point) {

		System.out.println("This is " + point.getSignature().getName());
	}

	@Around("execution(* com.ex.Service.*(..))")
	void transacionAspect(ProceedingJoinPoint point) throws Throwable {

		try {
			System.out.println("Method Execution started");
			point.proceed();
			System.out.println("Method Executed Successfully");
		} catch (Exception e) {
			System.out.println("Transaction RollBacked");
			e.printStackTrace();
		}
	}

	@Around("execution(* com.ex.Service.*(..))")
	void PerformanceMon(ProceedingJoinPoint point) throws Throwable {

		long start = System.currentTimeMillis();
		point.proceed();
		long end = System.currentTimeMillis();
		long duration = end - start;
		System.out.println("Time taken for this method to run: " + duration + "mm");

	}

	@Before("execution(* com.ex.Service.*(..))")
	void SecurityAspect() throws Throwable {
		String user = getUser();
		if (user.equals("Admin")) {
			System.out.println("Access Granted");
		} else throw new SecurityException();
	}

	String getUser() {
		// TODO Auto-generated method stub
		return "customer";
	}

}
