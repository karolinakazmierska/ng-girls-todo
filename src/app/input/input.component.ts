import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `
    <input [value]='title'
            (keyup.enter)="changeTitle(inputElement.value)"
            #inputElement>

    <button class="btn" (click)="changeTitle(inputElement.value)">
        Save
    </button>
  `,
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
    title: string = 'Enter your task';
    @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
      this.submit.emit(newTitle);
  }

}
