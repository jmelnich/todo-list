import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  id: number;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
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
    this.id = this.todos.length - 1;
  }

  addToDo(): void {
    if (!this.todoTitle.trim()) {
      return ;
    }
    this.todos.push({
      id: this.id,
      title: this.todoTitle,
      completed: false,
      editing: false
    });
    this.todoTitle = '';
    this.id++;
  }

  deleteToDo(id: number): void {
    this.todos = this.todos.filter(item => item.id !== id);
  }

  editToDo(todo: Todo): void {
      todo.editing = true;
  }
}
