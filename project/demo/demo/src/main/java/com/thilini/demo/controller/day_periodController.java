package com.thilini.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thilini.demo.model.Day_period;
import com.thilini.demo.service.day_periodService;

@RestController
public class day_periodController {
@Autowired
	private day_periodService day_periodService;

@GetMapping("/dayperiod")
public Iterable<Day_period> findAll(){
	
	return day_periodService.findAll();
}
}
