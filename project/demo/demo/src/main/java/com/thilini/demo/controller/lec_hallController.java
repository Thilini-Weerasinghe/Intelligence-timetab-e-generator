package com.thilini.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thilini.demo.model.Lec_hall;
import com.thilini.demo.service.lecHallService;

@RestController
public class lec_hallController {

	@Autowired
	private lecHallService lecHallService;
	
	@GetMapping("/lecturehall")
	public Iterable<Lec_hall> findAllHall(){
		
		return lecHallService.findAllHall();
	}
}
