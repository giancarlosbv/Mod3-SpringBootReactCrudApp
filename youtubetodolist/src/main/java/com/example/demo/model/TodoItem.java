package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tasks")
public class TodoItem {
	@Id
//	@GeneratedValue
	private int id;
	
	private String task;
	private boolean checked;
	
	public TodoItem() {
	
	}

	public TodoItem(int id, String task, boolean checked) {
		super();
		this.id = id;
		this.task = task;
		this.checked = checked;
	}
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTask() {
		return task;
	}

	public void setTask(String task) {
		this.task = task;
	}

	

	public void setChecked(boolean checked) {
		this.checked = checked;
	}

	public boolean getChecked() {
		// TODO Auto-generated method stub
		return checked;
	}
	
	
	
	
	
	
	
	
	
	
	
}
