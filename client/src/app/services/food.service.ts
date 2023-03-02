import { Injectable } from '@angular/core';
import { sample_foods } from '../data';
import { Food } from '../shared/models/Food';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():Food[]{
    return sample_foods;
  }

  getFoodsBySearchTerm(searchTerm:string){
    return this.getAllFood().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
