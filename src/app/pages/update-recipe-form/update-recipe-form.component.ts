import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-recipe-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatRadioModule],
  templateUrl: './update-recipe-form.component.html',
  styleUrl: './update-recipe-form.component.scss'
})
export class UpdateRecipeFormComponent {

  recipeItem:any={
    title:"pizza",
    description:"degusting",
    foodType:"non_veg",
    image:"image"
  }

  constructor(@Inject(MAT_DIALOG_DATA) public recipe: any, private recipeService:RecipeServiceService){}

  onSubmit(){

    this.recipeService.deleteRecipes(1)

    console.log("values",this.recipeItem)

  }

}
