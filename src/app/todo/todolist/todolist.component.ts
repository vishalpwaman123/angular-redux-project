import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoList, TodoSchema } from '../redux/todo.state';
import { Observable } from 'rxjs';
import { deleteNote, setIsEditFlag } from '../redux/todo.action';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css',
})
export class TodolistComponent implements OnInit {
  List!: TodoSchema[];
  list$!: Observable<TodoSchema[]>;
  constructor(private store: Store<{ listData: TodoList }>) {}
  ngOnInit(): void {
    this.list$ = this.store.select((state) => state.listData.list);
    this.list$.subscribe((res) => {
      console.log(res);
      this.List = res;
    });
  }

  handleEdit(data: TodoSchema): void {
    this.store.dispatch(setIsEditFlag({ isEdit: true, todoListId: data.id }));
  }

  handleDelete(Id: number): void {
    this.store.dispatch(deleteNote({ todoListId: Id }));
  }
}
