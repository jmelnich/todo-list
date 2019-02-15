import { Component, OnInit } from '@angular/core';
import { Todo } from '../../interfaces/todo';


@Component({
  selector: 'todo-list', //how i do import in into another app html <todo-list></todo-list>
  templateUrl: './todo-list.component.html', //template
  styleUrls: ['./todo-list.component.scss'] //styles
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  id: number;
  beforeEditCache: string;
  filter: string;

  constructor() { }

  ngOnInit() {
    this.todoTitle = '';
    this.beforeEditCache = '';
    this.filter = 'all';
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
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEdit(todo: Todo): void {
    if (!todo.title.trim()) {
      todo.title = this.beforeEditCache;

    }
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  remaining(): number {
    return this.todos.filter(todo => todo.completed === false).length;
  }

  isAnyCompleted(): boolean {
    return this.todos.filter(todo => todo.completed === true).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => todo.completed === false);
  }

  checkAll(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement> event.target).checked);
  }

  todosFiltered(): Todo[] {
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
  }
}

