import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {ITask, StateEnum} from './task.model';
import {Headers, Http, RequestOptions, Response} from '@angular/http';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get('http://localhost:8090/v1/tasks').map((response: Response) => {
      return <ITask[]>response.json();
    }).catch(this.handleError);
  }

  getTask(id: string): Observable<ITask> {
    return this.http.get('http://localhost:8090/v1/tasks/' + id).map((response: Response) => {
      return <ITask>response.json();
    }).catch(this.handleError);
  }

  saveTask(task: ITask): Observable<ITask> {
    task.state = StateEnum.HOLD;
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:8090/v1/tasks/', JSON.stringify(task), options)
      .map((response: Response) => {
          return response;
      }).catch(this.handleError);
  }

  updateTask(task: ITask): Observable<ITask> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put('http://localhost:8090/v1/tasks/', { task : JSON.stringify(task)}, options)
      .map((response: Response) => {
        return response;
      }).catch(this.handleError);
  }

  searchTasks(searchTerm: string): Observable<ITask[]> {
    let term = searchTerm.toLocaleLowerCase();
    return this.http.get('http://localhost:8090/v1/tasks/getByName/' + searchTerm)
      .map((response: Response) => {
        let tasks = <ITask[]>response.json();
        return tasks;
      }).catch(this.handleError);
  }

  run(id: number): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post('http://localhost:8090/v1/tasks/run/' + id,{}, options)
        .map((response: Response) => {
          return response;
        }).catch(this.handleError);
  }

  runAll() {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('http://localhost:8090/v1/tasks/run/', {}, options)
        .map((response: Response) => {
          return response;
        }).catch(this.handleError).subscribe();
  }

  delete(id: number): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.delete('http://localhost:8090/v1/tasks/' + id, options)
        .map((response: Response) => {
          return response;
        }).catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }
}
