package com.thilini.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thilini.demo.model.Lecturer;

public interface lectureRepository extends JpaRepository<Lecturer , Integer  > {

}
