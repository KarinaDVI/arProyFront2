import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Experience } from '../models/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experienceUrl = 'http://localhost:8080/apikb/experience'

  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
  }
}

  getAllExperience(): Observable<Experience[]>{
    return this.http.get<Experience[]>(this.experienceUrl+'/all').pipe(
      catchError(this.handleError<Experience[]>('getAllExperience',[]))
  );
}
  public saveExperience(newExperience:Experience):Observable<any>{
    return this.http.post<any>(this.experienceUrl + '/',newExperience);
  }

  public getExperience(id: number):Observable<Experience> {
    return this.http.get<Experience>(this.experienceUrl + `/one/${id}`);
  }
 
  public updateExperience(id:number, experience:Experience):Observable<any>{
    return this.http.put<any>(this.experienceUrl + `/edit/${id}`,experience);
  }

  public deleteExperience(experienceList: Experience[], experienceParaBorrar: Experience ): 
  Observable<Experience> {experienceList.filter(p => p.id !== experienceParaBorrar.id)
    return this.http.delete<any>(this.experienceUrl + "/" + experienceParaBorrar.id);
  }

  
}