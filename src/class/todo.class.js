export class Todo {

    static fromJson({ id, tarea, creado, completado }){

        const tempTodo = new Todo( tarea );

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }


    constructor( tarea ){

        this.tarea = tarea;
        this.id = new Date().getTime();
        this.creado = new Date();
        this.completado = false;
   
    }

    imprimir(){
        console.log(`${this.tarea} - ${this.id}`);
    }
}