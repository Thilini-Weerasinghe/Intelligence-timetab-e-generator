package com.thilini.demo.service;

import com.thilini.demo.model.Lecturer;


public interface lecturerService {

	Iterable<Lecturer> findAllLecturer();
	Iterable<Lecturer> saveLecturer(Iterable<Lecturer> lecturer);
//	String saveUser(Lecturer lecdata);

}
