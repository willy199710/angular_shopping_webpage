import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private foodService: FoodService){
    this.foods = foodService.getAllFood();
    this.tags = foodService.getAllTags();
  }

  foods:Food[];
  tags: Tag[];

  getFoodsByName(text:string){
    this.foods = this.foodService.getFoodsBySearchTerm(text);
  }

  getFoodsByTag(text:string){
    this.foods = this.foodService.getFoodsByTag(text);
  }
}
