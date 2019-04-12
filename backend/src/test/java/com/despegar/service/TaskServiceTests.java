package com.despegar.service;

import com.despegar.enums.StateEnum;
import com.despegar.model.Task;
import com.despegar.repository.TaskRepository;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskServiceTests {
  @InjectMocks
  private TaskService taskService;

  @Mock
  private TaskRepository taskRepository;

  @Before
  public void setupMock() {
    MockitoAnnotations.initMocks(this);
  }

	@Test
	public void testGetTasks() {
    List<Task> tasks = new ArrayList<>(Arrays.asList(
        new Task(0, "Task 1", 3, StateEnum.HOLD),
        new Task(1, "Task 2", 1, StateEnum.HOLD),
        new Task(2, "Task 3", 8, StateEnum.HOLD)));
    Mockito.when(taskRepository.getTasks()).thenReturn(tasks);
    Assert.assertEquals(3 , taskService.getTasks().size());
	}

}
