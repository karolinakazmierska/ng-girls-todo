import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `
<div class="todo-app">
  <h1>
    {{title}}
  </h1>

  <todo-input (submit)="addItem($event)" class="todo-add"></todo-input>
  <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item" (remove)="removeItem($event)" (save)="saveItem($event, item)"></todo-item>
    </li>
  </ul>
</div>
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
    title = 'My To Do List';
    todoList: any[];

    constructor(private todoListService:TodoListService) { }

    ngOnInit() {
        this.todoList = this.todoListService.getTodoList();
    }

    addItem(title:string) {
        console.log("Add item text");
        this.todoList = this.todoListService.addItem({ title });
    }

    removeItem(item) {
        this.todoList = this.todoListService.removeItem(item);
    }

    saveItem(changes, item) {
        this.todoList = this.todoListService.saveItem(changes, item);
    }

}
