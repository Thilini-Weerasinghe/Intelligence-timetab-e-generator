package com.thilini.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Subject")
public class Subject {

	@Id
	 @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="Id") 
	private Integer id;
	
	@Column(name="Subject_Name") 
	private String Sublect_name;
	  
	@Column(name="course_code") 
	private String coure_code;
	
	@Column(name="Year") 
	private Integer year;
	
	@Column(name="Lec_Id") 
	private String lec_id;
	
	

	public Subject() {
		
		// TODO Auto-generated constructor stub
	}

	public Subject(Integer id, String sublect_name, String coure_code, Integer year, String lec_id) {
		super();
		this.id = id;
		Sublect_name = sublect_name;
		this.coure_code = coure_code;
		this.year = year;
		this.lec_id = lec_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getSublect_name() {
		return Sublect_name;
	}

	public void setSublect_name(String sublect_name) {
		Sublect_name = sublect_name;
	}

	public String getCoure_code() {
		return coure_code;
	}

	public void setCoure_code(String coure_code) {
		this.coure_code = coure_code;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getLec_id() {
		return lec_id;
	}

	public void setLec_id(String lec_id) {
		this.lec_id = lec_id;
	}
	
	

}
