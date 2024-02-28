import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = ''; // vai inicializar o dado
  @Input() userData!: {email: string, role: string}; // vai inicializar o dado

  constructor() { }

  ngOnInit(): void {
  }

}
