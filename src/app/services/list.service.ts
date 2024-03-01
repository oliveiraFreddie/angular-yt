import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})

export class ListService {
  animals: BehaviorSubject<Animal[]> = new BehaviorSubject([
    {name: 'Turca', type: 'Dog', age: 4},
    {name: 'Ton', type: 'Cat', age: 10},
    {name: 'Wagner', type: 'Dog', age: 20},
    {name: 'Robson', type: 'Horse', age: 15},
  ]) ;

  removeAnimal( removedAnimal: Animal) {
    const currentAnimals = this.animals.getValue()
    const newAnimalList = currentAnimals.filter((a) => !Boolean(removedAnimal.name === a.name) )
    this.animals.next(newAnimalList)
  }

  listenAnimalChange$(): Observable<Animal[]> {  
    return this.animals.asObservable()
  }

  constructor() { }
}
