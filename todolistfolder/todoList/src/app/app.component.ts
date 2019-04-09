import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My To-Do List!';
  todos = [
    {
      task: 'Get better at Javascript',
    },
    {
      task: 'Create an Angular List for job interview',
    },
    {
      task: 'Black belt in Brazilian Jiu Jitsu',
    },
    {
      task: 'Go to the gym',
    }
  ];

  addTodo(newTodoTask) {
    const newTodo = {
      task: newTodoTask,
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter((filterchecker) => filterchecker.task !== todo.task );
  }


}





