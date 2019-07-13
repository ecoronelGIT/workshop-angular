import {Injectable} from '@angular/core';
import {ITask, StateEnum} from './task.model';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks(): Observable<ITask[]> {
    return this.http.get<ITask[]>('http://localhost:8090/v1/tasks').pipe(catchError(this.handleError));
  }

  getTask(id: string): Observable<ITask> {
    return this.http.get<ITask>('http://localhost:8090/v1/tasks/' + id).pipe(catchError(this.handleError));
  }

  saveTask(task: ITask): Observable<ITask> {
    task.state = StateEnum.HOLD;
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<ITask>('http://localhost:8090/v1/tasks/', JSON.stringify(task), {headers: headers})
        .pipe(catchError(this.handleError));
  }

  updateTask(task: ITask): Observable<ITask> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put<ITask>('http://localhost:8090/v1/tasks/',
        { task : JSON.stringify(task)}, {headers: headers})
        .pipe(catchError(this.handleError));
  }

  searchTasks(searchTerm: string): Observable<ITask[]> {
    return this.http.get<ITask[]>('http://localhost:8090/v1/tasks/getByName/' + searchTerm)
        .pipe(catchError(this.handleError));
  }

  run(id: number): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8090/v1/tasks/run/' + id,{}, {headers: headers})
        .pipe(catchError(this.handleError));
  }

  runAll() {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.http.post('http://localhost:8090/v1/tasks/run/', {}, {headers: headers})
        .pipe(catchError(this.handleError)).subscribe();
  }

  delete(id: number): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete('http://localhost:8090/v1/tasks/' + id, {headers: headers})
        .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    return throwError(error.statusText);
  }
}
