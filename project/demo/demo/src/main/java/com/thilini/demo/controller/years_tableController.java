package com.thilini.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.thilini.demo.service.yearTableService;
import com.thilini.demo.model.Years_table;

@RestController
public class years_tableController {

	@Autowired
	private yearTableService yearTableService;
	
	@GetMapping("/yeartable")
	public Iterable<Years_table> finfall(){
		
		return yearTableService.findAll();
	}
}
