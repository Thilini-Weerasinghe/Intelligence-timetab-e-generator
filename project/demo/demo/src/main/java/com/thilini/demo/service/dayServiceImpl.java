 package com.thilini.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thilini.demo.model.Day;
import com.thilini.demo.repository.dayRepository ;

@Service
public class dayServiceImpl implements dayService {

	@Autowired
	private dayRepository dayRepository ;

	@Override
	public Iterable<Day> findAllDay() {
		// TODO Auto-generated method stub
		return dayRepository.findAll();
	}
	
	
}
