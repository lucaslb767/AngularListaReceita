import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simply a test', 'https://p0.pikist.com/photos/202/820/gastronomy-food-dishes-eat-recipe-lunch.jpg'),
    new Recipe('A test recipe', 'This is simply a test', 'https://p0.pikist.com/photos/202/820/gastronomy-food-dishes-eat-recipe-lunch.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
