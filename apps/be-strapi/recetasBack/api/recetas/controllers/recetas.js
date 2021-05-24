'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const findByNombre = async (pObjeto)=> {
	const { nombre } = pObjeto.params;

	//const resultado = await strapi.query('recetas').find({ 'nombre': nombre })
	//return resultado;

	
	const result = await strapi.query('recetas').model.query(condiciones => {
		condiciones.where('nombre', nombre);
	}).fetch();

	return result.toJSON();

	

	
}


module.exports = {
	findByNombre
};

