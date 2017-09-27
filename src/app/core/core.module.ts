import {NgModule} from '@angular/core';
import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {OrderService} from '../order/order.service';
import {NotificationService} from '../shared/messages/notification.service';

@NgModule({
    providers: [ShoppingCartService, RestaurantsService, OrderService, NotificationService]
})
export class CoreModule {
}