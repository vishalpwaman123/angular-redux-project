import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { TodoComponent } from './todo/todo/todo.component';
import { TodooperationComponent } from './todo/todooperation/todooperation.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { todoReducer } from './todo/redux/todo.reducer';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterButtonComponent,
    CounterOutputComponent,
    TodoComponent,
    TodooperationComponent,
    TodolistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({counter: counterReducer})
    // StoreModule.forRoot({ listData: todoReducer }),
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
