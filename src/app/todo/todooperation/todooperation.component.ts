import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clear } from 'console';
import { TodoList } from '../redux/todo.state';
import { insertNote } from '../redux/todo.action';

@Component({
  selector: 'app-todooperation',
  templateUrl: './todooperation.component.html',
  styleUrl: './todooperation.component.css',
})
export class TodooperationComponent implements OnInit {
  constructor(private store: Store<{ listData: TodoList }>) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add '' to the class.
  }
  handleSubmit() {
    console.clear();
    var titleElement = document.getElementById('title') as HTMLInputElement;
    var descriptionElement = document.getElementById(
      'description'
    ) as HTMLInputElement;
    console.log(titleElement.value + ' ' + descriptionElement.value);
    this.store.dispatch(
      insertNote({
        title: titleElement.value,
        description: descriptionElement.value,
      })
    );
  }
}
