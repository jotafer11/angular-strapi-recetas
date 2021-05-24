import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecetarioService } from '../../services/recetario.service'; 
import { Receta } from 'src/app/models/receta';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit, OnDestroy {

  api_base_url: string = environment.api_base_url;
  is_loading: boolean;
  receta: Receta;
  routeSubscription: Subscription;


  constructor(private recetasService: RecetarioService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    // Load receta on route change
    this.routeSubscription = this.route.paramMap.subscribe( paramMap => {
      this.is_loading = true;
      this.recetasService.fetch(paramMap.get('recetaId')).subscribe(
        (receta) => {
          this.receta = receta;
          this.is_loading = false;
        }
      )
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) this.routeSubscription.unsubscribe();
  }  

}
