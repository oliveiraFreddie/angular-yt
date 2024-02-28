import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Fred';
  age: number = 29;
  job = 'Programmer';
  hobbies = ['Correr', 'Jogar', 'Estudar']
  car = {
    name: 'Polo',
    year: 2019,
    fuel: 'Gasoline'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
