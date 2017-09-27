import {Component, OnInit} from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    orderForm: FormGroup;
    emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    numberPattern = /^[0-9]*$/;
    delivery = 8;

    paymentoptions: RadioOption[] = [
        {label: 'Dinheiro', value: 'MON'},
        {label: 'Cartão de Débito', value: 'DEB'},
        {label: 'Cartão de Refeição', value: 'REF'}
    ];

    static equalsTo(group: AbstractControl): { [key: string]: boolean } {
        const email = group.get('email');
        const emailConfirmation = group.get('emailConfirmation');

        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return {emailsNotMatch: true};
        }

        return undefined;
    }

    constructor(private orderService: OrderService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.orderForm = this.formBuilder.group({
            name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
            number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [Validators.required])
        }, {validator: OrderComponent.equalsTo});
    }



    itemsValues(): number {
        return this.orderService.itemsValues();
    }

    cartItems(): CartItem[] {
        return this.orderService.cartItems();
    }

    increaseQty(item: CartItem): void {
        this.orderService.increaseQty(item);
    }

    decreaseQty(item: CartItem): void {
        this.orderService.decreaseQty(item);
    }

    remove(item: CartItem): void {
        this.orderService.removeItem(item);
    }

    checkOrder(order: Order) {
        order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
        this.orderService.checkOrder(order).subscribe((orderReturn: Order) => {
            this.router.navigate(['/order-summary']);
            this.orderService.clear();
        });

        console.log(order);
    }

}
