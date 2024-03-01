import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss']
})

export class ListRenderComponent implements OnInit {

  animalDetails = ''
  animals = this.listService.listenAnimalChange$()

  constructor(private listService: ListService) { }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  onRemoveAnimal(animal: Animal) {
   this.listService.removeAnimal( animal)
  }

}
