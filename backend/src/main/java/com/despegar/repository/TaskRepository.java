package com.despegar.repository;

import com.despegar.enums.StateEnum;
import com.despegar.model.Task;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Repository
public class TaskRepository {
  List<Task> tasks = new ArrayList<>(Arrays.asList(
      new Task(0, "Task 1", 3, StateEnum.HOLD),
      new Task(1, "Task 2", 1, StateEnum.HOLD),
      new Task(2, "Task 3", 8, StateEnum.HOLD),
      new Task(3, "Task 4", 9, StateEnum.HOLD),
      new Task(4, "Task 5", 11, StateEnum.HOLD),
      new Task(5, "Task 6", 23, StateEnum.HOLD)
  ));

  public List<Task> getTasks() {
    return this.tasks;
  }

  public List<Task> getTasksByName(String name) {
    return this.tasks.stream().filter(task ->
      task.getName().toLowerCase().indexOf(name.toLowerCase()) != -1).collect(Collectors.toList());
  }

  public Task getById(Integer id) {
    return this.tasks.stream().filter(task -> id.equals(task.getId())).findAny().orElse(null);
  }

  public void deleteTask(Integer id) {
    this.tasks.stream().filter(task -> id.equals(task.getId())).findFirst().ifPresent(
        task -> {this.tasks.remove(task);});
  }

  public void updateTask(Task task) {
    this.tasks.stream().forEach(currentTask -> {
      if (currentTask.getId().equals(task.getId())) {
        currentTask.setState(task.getState());
        currentTask.setValue(task.getValue());
      }
    });
  }

  public void saveTask(Task task) {
    task.setId(this.tasks.get(this.tasks.size()-1).getId() + 1);
    this.tasks.add(task);
  }

}
