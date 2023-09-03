import { Component } from '@angular/core';
import { todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Khan"
    // }, 2000);
  }
}
