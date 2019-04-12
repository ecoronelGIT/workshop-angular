package com.despegar.service;

import com.despegar.enums.StateEnum;
import com.despegar.model.Task;
import com.despegar.repository.TaskRepository;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PreDestroy;
import javax.swing.plaf.nimbus.State;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
public class TaskService {
  private static final Logger logger = LogManager.getLogger(TaskService.class);
  private ExecutorService executor = Executors.newFixedThreadPool(3);
  private static Object lock = new Object();

  @Autowired
  TaskRepository taskRepository;

  @PreDestroy
  public void destroy() {
    this.executor.shutdown();
  }

  private Integer count = 0;

  public List<Task> getTasks() {
    return this.taskRepository.getTasks();
  }

  public List<Task> getTasksByName(String name) {
    synchronized (lock) {
      logger.debug("Get Task by name: " + name);
      return this.taskRepository.getTasksByName(name);
    }
  }

  public Task getById(Integer id) {
    synchronized (lock) {
      logger.debug("Get Task by ID: " + id);
      return this.taskRepository.getById(id);
    }
  }

  public void deleteTask(Integer id) {
    synchronized (lock) {
      logger.debug("Delete Task ID: " + id);
      this.taskRepository.deleteTask(id);
    }
  }

  public void updateTask(Task task) {
    synchronized (lock) {
      logger.debug("Update Task ID: " + task.getId());
      this.taskRepository.updateTask(task);
    }
  }

  public void saveTask(Task task) {
    this.taskRepository.saveTask(task);
    logger.debug("Task Saved");
  }

  public void run(Integer id) {
    this.runTask(this.getById(id));
  }

  private void runTask(Task task) {
    if (task.getState().equals(StateEnum.HOLD)) {
      task.setState(StateEnum.WAITING);
      this.updateTask(task);
      Runnable runnable = () -> {
        try {
          logger.debug("Running thread for task: " + task.getId());
          task.setState(StateEnum.RUNNING);
          this.updateTask(task);
          task.setDivided(this.isPrimeNumber(task.getValue()));
          TimeUnit.SECONDS.sleep(60);
          synchronized (lock) {
            count++;
            if ((this.count % 5) == 0) {
              task.setState(StateEnum.FAILED);
            } else {
              task.setState(StateEnum.COMPLETED);
            }
          }
          this.updateTask(task);
          logger.debug("Ending thread for task: " + task.getId());
        } catch (InterruptedException e) {
          logger.error("Error running thread", e);
          task.setState(StateEnum.FAILED);
        }
      };
      this.executor.execute(runnable);
    }
  }

  private boolean isPrimeNumber(Integer value) {
    int count = 0;
    for(int i=1; i < (value+1); i++){
      if(value%i==0){
        count++;
      }
    }
    if(count==2){
      return true;
    }
    return false;
  }

  public void runAllTaskOnHold() {
    logger.debug("Runing All Tasks ");
    ExecutorService executor = Executors.newFixedThreadPool(3);
    this.taskRepository.getTasks().forEach(task -> {
      runTask(task);
    });
  }

}
