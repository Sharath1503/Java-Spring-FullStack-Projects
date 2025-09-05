package com.example;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;


@Controller
public class ControllerEx {
	
	@GetMapping("/helloPage")
	public ModelAndView getHello()
	{
		System.out.println("hello");
		ModelAndView mv=new ModelAndView();
		mv.setViewName("hello");
		return mv;
	}

}
