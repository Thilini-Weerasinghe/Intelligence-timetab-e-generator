package com.thilini.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thilini.demo.model.Day;

@RestController
public class dayController {

	@Autowired
	private com.thilini.demo.service.dayService dayService;
	
	@GetMapping("/day")
	public Iterable<Day> findAllDay(){
		return dayService.findAllDay();
	}
}
