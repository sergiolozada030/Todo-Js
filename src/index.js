import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';

// import { Todo } from './class/todo.class';
// import { TodoList } from './class/todo-list-class';
 

export const todolist = new TodoList();

todolist.todos.forEach( crearTodoHtml );

// Se puede hacer de las dos formas 
// todolist.todos.forEach( todo => { crearTodoHtml(todo) });

// const tarea = new Todo('Aprender JavaScript');
// todolist.nuevoTodo( tarea );

// console.log( todolist );
// todolist.todos[0].imprimir();

// crearTodoHtml( tarea );