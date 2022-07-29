import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class AboutServiceService {

  aboutUrl = 'http://localhost:8080/apikb/person'

  constructor(private http:HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error); 
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
  getAllPersons(): Observable<Persona[]>{

    return this.http.get<Persona[]>(this.aboutUrl+'/all').pipe(
      catchError(this.handleError<Persona[]>('getAllPersona',[]))
  );
}
  public savePersona(newPersona:Persona):Observable<any>{
    return this.http.post<any>(this.aboutUrl + '/',newPersona);
  }
  public getPersona(id: number):Observable<Persona> {
    return this.http.get<Persona>(this.aboutUrl + `/one/${id}`);
  }
  /*public getByName(nombre:String):Observable<Persona>{
    return this.http.get<Persona>(this.aboutUrl + `/${nombre}`);
  }*/

  public updatePersona(id:number,persona:Persona):Observable<any>{
    return this.http.put<any>(this.aboutUrl + `/edit/${id}`,persona);
  }
  
  //Usar este..//(Prefereible)
  public removerPersona(id: number): Observable<Persona>{
    return this.http.delete<Persona>(this.aboutUrl + `/${id}`)
  };

  //O este..
  deletePersona(personas: Persona[], personaParaBorrar: Persona ): Observable<Persona> {
    personas.filter(p => p.id !== personaParaBorrar.id)
    return this.http.delete<any>(this.aboutUrl + "/" + personaParaBorrar.id);
  }

}
