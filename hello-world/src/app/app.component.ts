import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  goals:string[];

  constructor() {
    this.goals= ['Find yourself', 'Learn to dream again', 'Complete Angular tutorial',  'think like a champion', 'be a champion']
  }
}

