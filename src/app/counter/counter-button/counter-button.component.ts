import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  customCount,
  decrement,
  decrementByFive,
  increment,
  incrementByFive,
  reset,
} from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css',
})
export class CounterButtonComponent {
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  count!: number;
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  onIncrement() {
    // this.increment.emit();
    this.store.dispatch(increment());
  }

  onIncrementByFive(value: number = 5) {
    this.store.dispatch(incrementByFive({ count: value }));
  }

  onDecrement() {
    // this.decrement.emit();
    this.store.dispatch(decrement());
  }

  onDecrementbyFive(value: number = -5) {
    this.store.dispatch(decrementByFive({ count: value }));
  }

  onReset() {
    // this.reset.emit();
    this.store.dispatch(reset());
  }

  onSubmit() {
    console.log(this.count);
    this.store.dispatch(customCount({ count: this.count }));
    this.count = 0;
  }
}
