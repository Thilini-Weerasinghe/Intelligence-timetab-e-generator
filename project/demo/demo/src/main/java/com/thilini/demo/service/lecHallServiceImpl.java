package com.thilini.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.thilini.demo.model.Lec_hall;
import com.thilini.demo.repository.lec_hallRepository;

@Service
public class lecHallServiceImpl implements lecHallService {

	@Autowired
	private lec_hallRepository lec_hallRepository;
	
	@Override
	public Iterable<Lec_hall> findAllHall() {
		// TODO Auto-generated method stub
		return lec_hallRepository.findAll();
	}

}
