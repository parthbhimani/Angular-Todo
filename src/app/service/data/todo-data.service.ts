import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService{
 listId = 2
  todos : Todo[] = [
      new Todo(1, 'Example Todo', false, new Date())
    ]
  constructor( ) { }

  retrieveAllTodos() {
    return this.todos
  }

  deleteTodo(id){
    this.todos.splice(this.todos.findIndex(t => t.id == id),1);
    return true;
  }

  retrieveTodo(id : number){
    return this.todos[this.todos.findIndex(t => t.id == id)]
  }

  updateTodo(id, todo){
    this.todos[this.todos.findIndex(t => t.id == id)] = todo
  }

  createTodo(todo){
    todo.id = this.listId++
     this.todos.push(todo)
    return true
  }

}
