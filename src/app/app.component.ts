import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userName = 'Joaquim';

  userData = {
    email: 'teste@teste.com',
    role: 'Admin'
  }
  
  title = 'angular-yt';
}
