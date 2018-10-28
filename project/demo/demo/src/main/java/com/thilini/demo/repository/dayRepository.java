package com.thilini.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thilini.demo.model.Day;

public interface dayRepository extends JpaRepository<Day, Integer> {

}
