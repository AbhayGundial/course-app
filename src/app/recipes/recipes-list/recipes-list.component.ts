import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A Test Recipe', 'This is simply a test recipe', 'https://cdn.pixabay.com/photo/2016/03/09/15/30/breakfast-1246686_960_720.jpg')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
