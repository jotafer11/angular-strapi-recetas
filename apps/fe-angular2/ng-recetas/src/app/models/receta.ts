import { Categoria } from './categoria';

export class Receta {
	id: number;
	nombre: string;
	nombrecategoria: string;
	ingredientes: string;
	preparacion: string;
	imagen: any;
	categoria: Categoria[];

	constructor(pId=0, pNombre='', pNombrecategoria='', pIngredientes='', pPreparacion='') {
		this.id = pId;
		this.nombre = pNombre;
		this.nombrecategoria = pNombrecategoria;
		this.ingredientes = pIngredientes;
		this.preparacion = pPreparacion;
	}

}
