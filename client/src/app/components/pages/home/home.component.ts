import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private foodService: FoodService){
    this.foods = foodService.getAllFood();
  }

  getFoodsByName(text:string){
    this.foods = this.foodService.getFoodsBySearchTerm(text);
  }
  foods:Food[];

}
