import { Injectable, OnInit } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService  implements OnInit{

  lastId: number = 0;
  todos: Todo [] = [];
  selectedTodo : Todo;
  monTodo: Todo; 
 
  constructor() { }

  addTodo(todo: Todo):TodoDataService {
  
    todo.id = this.lastId+1;
    this.todos.push(todo);
    this.lastId = this.lastId+1;
    return this;

  }

  updateTodoById(id: number, values: Object = {}) : Todo {

    let todo = this.getTodoById(id);

    if (!todo) {

      return null;
    }

    Object.assign(todo, values);

    return todo;

  }

  // Simulate GET/todos 

  getAllTodos(): Todo[] {

    return this.todos;
  }
  // recuperer todos par ID
  public getTodoById(id: number): Todo {

    return this.todos
    .filter(todo => todo.id === id)
    .pop();
  }

  // Supprimer Todo avec Id 
  deleteTodoById(id: number): TodoDataService{
    this.todos= this.todos
    .filter(todo => todo.id !== id);
    return this;

  }

  //bascule todo fait

  toggleTodoComplete(todo : Todo){

    console.log(todo);
    let updatedTodo = "debug";
    /*let updatedTodo =this.updateTodoById(todo.id, {

      complete: !todo.complete
    });

    */
    return updatedTodo;

  }

  ngOnInit() {
    
    // this.monTodo = new Todo(); 
    // this.monTodo.id=1;
    // this.monTodo.title= ' TITRE';
    // this.monTodo.description='dormir';
    // this.monTodo.acteur='yves';
    // this.todos.push(this.monTodo);

  }
  
  
  
     
  
  

    
    

}



 

