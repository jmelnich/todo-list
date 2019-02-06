import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: object[];
  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Finish Angular course',
        completed: false,
        editing: false
      },
      {
        id: 2,
        title: 'Take over the world',
        completed: false,
        editing: false
      },
      {
        id: 3,
        title: 'Fix js fundamentals',
        completed: false,
        editing: false
      }
    ];
  }

}
