import { Receta } from './receta';

export class Categoria {
	id: number;
	tipo: string;
	created_at: string;
	updated_at: string;
	recetas: Receta[];
}