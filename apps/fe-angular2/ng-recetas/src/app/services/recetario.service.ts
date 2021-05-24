import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta';
import { environment } from 'src/environments/environment';

const RECETAS_PER_PAGE = 10;


@Injectable({
  providedIn: 'root'
})
export class RecetarioService {
    constructor(private http: HttpClient) { }


    /** Fetch Recetas Paginated
    * @param page to fetch
    * @return Recetas array
    */

    list(page: number = 1, search: string = ''): Observable<Receta[]> {
      const searchParameters = search ? `&nombrecategoria_contains=${encodeURIComponent(search)}` : '';

        return this.http.get<Receta[]>(
            `${environment.api_base_url}/recetas?_start=${(page-1) * RECETAS_PER_PAGE}&_limit=${RECETAS_PER_PAGE}` + searchParameters
        );
    }


    /**
     * Fetch Recetas by ID
     * @param id to retrieve
     * @return Receta or null
     */


    fetch(id: string): Observable<Receta> {
        return this.http.get<Receta>(`${environment.api_base_url}/recetas/${id}`);
    }    
  


}