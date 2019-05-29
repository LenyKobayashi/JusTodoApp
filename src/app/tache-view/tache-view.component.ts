import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-tache-view',
  templateUrl: './tache-view.component.html',
  styleUrls: ['./tache-view.component.css']
})
export class TacheViewComponent implements OnInit {

 
  monTodo: Todo;
  titre:string;
  todo: string;
  todos: Todo [] = [];

  //todoService:TodoDataService;
  

  constructor(public todoService: TodoDataService) { 
    this.titre = "toto";
  }

  ngOnInit() {

    this.monTodo = this.todoService.getTodoById(1);
   

  }

  todoModifie(todo) {

    this.todo = this.todoService.toggleTodoComplete(this.todo);
    this.todos.push(todo);




  }

  public getTodoById(id: number): Todo {

    return this.todos
    .filter(todo => todo.id === id)
    .pop();
  }
  
  updateTodoById(id: number, values: Object = {}) : Todo {

    let todo = this.getTodoById(id);

    if (!todo) {

      return null;
    }

    Object.assign(todo, values);

    return todo;

  }




  toggleTodoComplete(todo : Todo){

    let updatedTodo =this.updateTodoById(todo.id, {

      complete: !todo.complete
    });

    return updatedTodo;

  }

}
