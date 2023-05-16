import { Injectable, signal} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  length: number = 0;
  private count = new BehaviorSubject(this.length);
  countObservable: Observable<number> = this.count.asObservable();

  lenghtSignal = signal<number>(this.length);

  constructor() { }

  addProductToCart() {
   // this.count.next(++this.length);
    console.log(" >>>>>> Add to cart TRIGGERED !!" + this.length)

    this.lenghtSignal.update(value => value +1);
  }
}
