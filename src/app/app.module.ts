import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component'
import {ROUTES} from './app.routes';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantComponent} from './restaurants/restaurant/restaurant.component';
import {RestaurantDetailComponent} from './restaurant-detail/restaurant-detail.component';
import {MenuComponent} from './restaurant-detail/menu/menu.component';
import {ShoppingCartComponent} from './restaurant-detail/shopping-cart/shopping-cart.component';
import {MenuItemComponent} from './restaurant-detail/menu-item/menu-item.component';
import {RestaurantsService} from './restaurants/restaurants.service';
import {ReviewComponent} from './restaurant-detail/review/review.component';
import {ShoppingCartService} from './restaurant-detail/shopping-cart/shopping-cart.service';
import {NotificationService} from './shared/messages/notification.service';
import {OrderComponent} from './order/order.component';
import {FormsModule} from '@angular/forms';
import {InputComponent} from './shared/input/input.component';
import {RadioComponent} from './shared/radio/radio.component';
import {OrderItemsComponent} from './order/order-items/order-items.component';
import {OrderService} from './order/order.service';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemsComponent,
    DeliveryCostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    NotificationService,
    OrderService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}