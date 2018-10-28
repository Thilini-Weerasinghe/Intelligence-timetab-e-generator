package com.thilini.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="DayPeriod")
public class Day_period {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	@Column(name="id")
	private Integer id;
	
	@Column(name="d_id")
	private Integer d_id;
	
	@Column(name="p_id")
	private Integer p_id;

	public Day_period() {
	
		// TODO Auto-generated constructor stub
	}

	public Day_period(Integer id, Integer d_id, Integer p_id) {
		super();
		this.id = id;
		this.d_id = d_id;
		this.p_id = p_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getD_id() {
		return d_id;
	}

	public void setD_id(Integer d_id) {
		this.d_id = d_id;
	}

	public Integer getP_id() {
		return p_id;
	}

	public void setP_id(Integer p_id) {
		this.p_id = p_id;
	}
	
	
	
	
	
	
	
}
