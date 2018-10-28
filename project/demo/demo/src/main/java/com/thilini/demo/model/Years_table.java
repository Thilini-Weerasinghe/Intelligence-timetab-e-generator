package com.thilini.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="yearTable")
public class Years_table {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	@Column(name="id")
	private Integer id;
	
	@Column(name="dp_id")
	private Integer dp_id;
	
	@Column(name="s_id")
	private Integer s_id;
	
	@Column(name="lh_id")
	private Integer lh_id;

	public Years_table() {
		
		// TODO Auto-generated constructor stub
	}

	public Years_table(Integer id, Integer dp_id, Integer s_id, Integer lh_id) {
		super();
		this.id = id;
		this.dp_id = dp_id;
		this.s_id = s_id;
		this.lh_id = lh_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getDp_id() {
		return dp_id;
	}

	public void setDp_id(Integer dp_id) {
		this.dp_id = dp_id;
	}

	public Integer getS_id() {
		return s_id;
	}

	public void setS_id(Integer s_id) {
		this.s_id = s_id;
	}

	public Integer getLh_id() {
		return lh_id;
	}

	public void setLh_id(Integer lh_id) {
		this.lh_id = lh_id;
	}
	
	
	
	
}
