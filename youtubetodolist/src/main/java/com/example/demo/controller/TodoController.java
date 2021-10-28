package com.example.demo.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.TodoItem;
import com.example.demo.repo.TodoRepo;
//import com.example.demo.exception.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping(value = "/todo/")

public class TodoController {
//repository
	@Autowired
	private TodoRepo todoRepo;
	
//list all students http://localhost:8080/todo/alltasks
	@GetMapping("/alltasks")
	public List<TodoItem> findAll()
	{
		return todoRepo.findAll();
	}
	
	
//save new todo item
	@PostMapping("/addtask")
	public TodoItem newTodoItem(@RequestBody TodoItem t)
	{
		return todoRepo.save(t);
	}
	
	//get by id
	@GetMapping("/task/task/{id}")
	public ResponseEntity<TodoItem> getTaskById(@PathVariable int id)
	{
		TodoItem t= todoRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Task not found"));
		return ResponseEntity.ok(t);  
		}
	
	//get by name
	@GetMapping("/tasks/tasks/{tasks}")
	public List<TodoItem> getTaskbyName(@PathVariable String task)
	{
		List <TodoItem> todoItem=todoRepo.findByTask(task);
		if(todoItem.isEmpty())
		{
			System.out.println(new ResourceNotFoundException("Task(s) with the name "+ task +" not found"));	
		}
		return todoRepo.findByTask(task);
	}
	
	//put, updating task
	//http://localhost:8080/todo/task/2
	@PutMapping("/task/{id}")
	public ResponseEntity<TodoItem> updateTodoItem(@PathVariable int id, @RequestBody TodoItem todoItem)
	{
		TodoItem t= todoRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Task not found"));
	    t.setTask(todoItem.getTask());
	    t.setChecked(todoItem.getChecked());
	    TodoItem updatedTodoItem=todoRepo.save(t);
	    return ResponseEntity.ok(updatedTodoItem);
	}
	
	//delete task
	
	@DeleteMapping("/task/{id}")
	public String deleteTodoItem(@PathVariable int id)
	{
		todoRepo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Task not found"));
	    todoRepo.deleteById(id);
	    return "The task with id: " + id +" is removed from the database.";
	}
	
	
	
	
	
	
	
}
