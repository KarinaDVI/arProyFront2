import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Project } from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectUrl = 'http://localhost:8080/apikb/project'

  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  }
}

  getAllProject(): Observable<Project[]>{
    return this.http.get<Project[]>(this.projectUrl+'/all').pipe(
      catchError(this.handleError<Project[]>('getAllProject',[]))
  );
}
  public saveProject(newProject:Project):Observable<any>{
    return this.http.post<any>(this.projectUrl + '/',newProject);
  }

  public getProject(id: number):Observable<Project> {
    return this.http.get<Project>(this.projectUrl + `/one/${id}`);
  }
 
  public updateProject(id:number, project:Project):Observable<any>{
    return this.http.put<any>(this.projectUrl + `/edit/${id}`,project);
  }

  public deleteProject(projectList: Project[], projectParaBorrar: Project ): 
  Observable<Project> {projectList.filter(p => p.id !== projectParaBorrar.id)
    return this.http.delete<any>(this.projectUrl + "/" + projectParaBorrar.id);
  }

  
}
