import {Component, OnInit} from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {Reviews} from './reviews.model';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html'
})
export class ReviewComponent implements OnInit {

  reviews: Observable<Reviews>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
