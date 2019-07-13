import {ITask} from '../share/task.model';
import {Observable, of} from 'rxjs';
import {TaskService} from "./task.service";

describe('TaskService', () => {
  let taskService: TaskService;
  let mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    taskService = new TaskService(mockHttp);
  });

  describe('deleteTask', () => {
    it('should remove the task from the list of tasks', () => {
      const tasks: ITask[] = [{id: '1', name: 'Task 1', value: 3},{id: '2', name: 'Task 2', value: 9}];
      mockHttp.delete.and.returnValue(of(false));

      taskService.delete(1);

      expect(tasks.length).toBe(1);
      expect(tasks[0].id).toBe(2);
    });

    it('should call http.delete with the right URL', () => {
      const tasks: ITask[] = [{id: '1', name: 'Task 1', value: 3},{id: '2', name: 'Task 2', value: 9}];
      mockHttp.delete.and.returnValue(of(false));

      taskService.delete(1);

      expect(mockHttp.delete).toHaveBeenCalledWith(`http://localhost:8090/tasks/1`);
    });

  });

  describe('addTask', () => {
    it('should call http.post with the right URL', () => {
      const tasks: ITask = {name: 'Task 1', value: 3};
      mockHttp.post.and.returnValue(of(false));

      taskService.saveTask(task);

      expect(mockHttp.post).toHaveBeenCalledWith(`http://localhost:8090/tasks`
          , JSON.stringify(task), jasmine.any(Object));
    });
  });
});
