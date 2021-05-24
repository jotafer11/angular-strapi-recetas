import { Component, OnInit } from '@angular/core';

import { RecetarioService } from './services/recetario.service'; 
import { LoadScriptsService } from './services/load-scripts.service'; 

import { Receta } from './models/receta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'recetas-front'

	page: number;
	searchString: string = '';
	loading: boolean;
	recetas: Receta[] = [];


  constructor( 
    private recetarioService: RecetarioService,
    private LoadScriptsService: LoadScriptsService  
    ) 
    {
      LoadScriptsService.Load(["selectdropdown-copy"])
    }

  ngOnInit() {
  	this.page = 1;
  	this.fetchRecetas();
   }

  previousPage() {
    this.page--;
    if (this.page < 1) this.page = 1;
    this.fetchRecetas();
  }

  nextPage() {
    this.page++;
    this.fetchRecetas();
  }  

  submitSearch() {
    this.page = 1;
    this.fetchRecetas();
  }

  fetchRecetas() {
    this.loading = true;
    this.recetarioService.list(this.page, this.searchString).subscribe(
      (recetas) => {
        this.recetas = recetas;
        this.loading = false;
      }
    )
  }


  
}

