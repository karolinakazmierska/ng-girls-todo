import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'todo-item',
    template: `
    <div class="todo-item">
        <input type="checkbox" (click)="completeItem()" class="todo-checkbox"/>

        <p class="todo-title" [ngClass]="{'todo-complete': isComplete}" (click)="edit()" *ngIf="!isEdited">
            {{ todoItem.title }}
        </p>

        <todo-input *ngIf="isEdited" [title]="todoItem.title" (submit)="saveItem($event)" class="todo-title"></todo-input>

        <button class="btn btn-red" (click)="removeItem()">
            remove
            </button>
    </div>
        `,
    styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() todoItem: any;

    isEdited = false;

    @Output() remove:EventEmitter<any> = new EventEmitter();
    @Output() save:EventEmitter<any> = new EventEmitter();

    removeItem() {
        this.remove.emit(this.todoItem);
    }

    isComplete: boolean = false;

    completeItem() {
        this.isComplete = !this.isComplete;
    }

    edit() {
        this.isEdited = true;
    }

    saveItem(newTitle: string) {
        this.save.emit({title: newTitle});
        this.isEdited = false;
    }

}
