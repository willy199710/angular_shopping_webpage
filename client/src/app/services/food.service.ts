import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from '../data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

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

  getAllTags():Tag[]{
    return sample_tags;
  }

  getFoodsByTag(tag:string){
    if (tag === 'All') return this.getAllFood();
    return this.getAllFood().filter(food => food.tags?.includes(tag));
  }
}
