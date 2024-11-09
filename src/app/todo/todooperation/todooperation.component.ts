import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { clear } from 'console';
import { TodoList } from '../redux/todo.state';
import { insertNote, setIsEditFlag } from '../redux/todo.action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-todooperation',
  templateUrl: './todooperation.component.html',
  styleUrl: './todooperation.component.css',
})
export class TodooperationComponent implements OnInit, OnDestroy {
  todoListData$!: Observable<TodoList>;
  isEdit!: boolean;
  todoListId!: number;
  todoListSubscription!: Subscription;
  constructor(private store: Store<{ listData: TodoList }>) {}
  ngOnInit(): void {
    this.todoListData$ = this.store.select((field) => field.listData);
    this.todoListSubscription = this.todoListData$.subscribe((res) => {
      this.handleTodoList(res);
    });
  }

  handleTodoList(res: TodoList): void {
    this.isEdit = res.isEdit;
    this.todoListId = res.todoListId;
    if (this.isEdit) this.populateTodoListForm(res);
  }

  populateTodoListForm(res: TodoList): void {
    let titleElement = document.getElementById('title') as HTMLInputElement;
    let descriptionElement = document.getElementById(
      'description'
    ) as HTMLInputElement;
    let selectedList = res.list.find((x) => x.id == res.todoListId);
    if (selectedList) {
      titleElement.value = selectedList.title;
      descriptionElement.value = selectedList.description;
    }
  }

  handleSubmit(): void {
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
    titleElement.value = '';
    descriptionElement.value = '';
  }

  handleReset(): void {
    this.store.dispatch(setIsEditFlag({ isEdit: false, todoListId: 0 }));
    var titleElement = document.getElementById('title') as HTMLInputElement;
    var descriptionElement = document.getElementById(
      'description'
    ) as HTMLInputElement;
    titleElement.value = '';
    descriptionElement.value = '';
  }

  ngOnDestroy(): void {
    if (this.todoListSubscription) this.todoListSubscription.unsubscribe();
  }
}
