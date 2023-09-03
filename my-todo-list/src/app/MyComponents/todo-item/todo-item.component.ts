import { Component, Input } from '@angular/core';
import { todo } from "src/app/todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: todo;
  // ondelete(todo: todo){
  //   console.log("delete clicked")
  // }
}
