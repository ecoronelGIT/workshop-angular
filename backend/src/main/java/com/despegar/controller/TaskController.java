package com.despegar.controller;

import com.despegar.model.Task;
import com.despegar.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/v1")
public class TaskController {
  @Autowired
  private TaskService taskService;

  @RequestMapping(value = "/tasks", method = RequestMethod.GET)
  public List<Task> getTasks() {
    return taskService.getTasks();
  }

  @RequestMapping(value = "/tasks/getByName/{name}", method = RequestMethod.GET)
  public List<Task> getTasksByName(@PathVariable("name") String name) {
    return taskService.getTasksByName(name);
  }

  @RequestMapping(value = "/tasks/{id}", method = RequestMethod.GET)
  public Task getById(@PathVariable("id") Integer id) {
    return taskService.getById(id);
  }

  @RequestMapping(value = "/tasks/", method = RequestMethod.POST)
  public void saveTask(@RequestBody Task task) {
    taskService.saveTask(task);
  }

  @RequestMapping(value = "/tasks/", method = RequestMethod.PUT)
  public void updateTask(@RequestBody Task task) {
    taskService.updateTask(task);
  }

  @RequestMapping(value = "/tasks/run/{id}", method = RequestMethod.POST)
  public void runTask(@PathVariable("id") Integer id) {
    taskService.run(id);
  }

  @RequestMapping(value = "/tasks/run/", method = RequestMethod.POST)
  public void runTask() {
    taskService.runAllTaskOnHold();
  }

  @RequestMapping(value = "/tasks/{id}", method = RequestMethod.DELETE)
  public void deleteTask(@PathVariable("id") Integer id) {
    taskService.deleteTask(id);
  }

}