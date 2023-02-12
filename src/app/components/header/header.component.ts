import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

import { Store } from '@ngrx/store';
import { ChangeLimitAction, ChangeSortAction } from '../../header.actions'
import * as fromApp from '../../app.reducer';
import * as fromHeader from '../../header.reducer';
//import { State } from 'src/app/state.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  count$: Observable<string>
  sort$: Observable<string>

  private _cart: Cart = { items: [] }

  /* private cartSubscription: Subscription;
  private cart2 : Cart */
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart
  }
  
  set cart(cart: Cart){
    this._cart = cart;

    this.itemsQuantity = cart.items.map((item) => item.quantity)
    .reduce((prev, current) => prev + current ,0)
  }
  
  constructor(private cartService: CartService, private store: Store<fromHeader.State>) { }

  ngOnInit(): void {


    this.count$ = this.store.select(fromApp.getCount);
    this.sort$ = this.store.select(fromApp.getSort);

    /* Test con Subscription
    this.cartSubscription = this.cartService.cart2.subscribe((cart) => {
      this.cart2 = cart;
      console.log(this.cart2);
    }) */


    //RIUSCIRE AD ACCEDERE AGLI STORE
    //VEDERE LINK https://www.intertech.com/ngrx-tutorial-accessing-state-in-the-store/
    console.log(this.count$);
    
    this.count$.subscribe(test => console.log(test));

  }

  getTotal(items: Array<CartItem>):number {
    return this.cartService.getTotal(items);
  }

  onClearCart(){
    this.cartService.clearCart();
  }

  dispatchCount(){
    this.store.dispatch(new ChangeLimitAction('Dispatch effettuato'));
    console.log(this.count$);
  }

  dispatchSort(){
    this.store.dispatch(new ChangeSortAction('Ordine cambiato'));
  }

}
