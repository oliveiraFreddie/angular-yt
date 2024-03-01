import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Animal } from '../Animal';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  private apiUrl = 'http://localhost:3000/animals'

  animals: BehaviorSubject<Animal[]> = new BehaviorSubject([
    {name: 'Turca', type: 'Dog', age: 4},
    {name: 'Ton', type: 'Cat', age: 10},
    {name: 'Wagner', type: 'Dog', age: 20},
    {name: 'Robson', type: 'Horse', age: 15},
  ]) ;
  
  constructor(private http: HttpClient) { }

  removeAnimal( removedAnimal: Animal) {
    const currentAnimals = this.animals.getValue()
    const newAnimalList = currentAnimals.filter((a) => !Boolean(removedAnimal.name === a.name) )
    this.animals.next(newAnimalList)
  }

  listenAnimalChange$(): Observable<Animal[]> {  
    return this.animals.asObservable()
  }


  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl);
  }
}
