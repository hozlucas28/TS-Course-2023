/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Los tipos genéricos me permiten crear una función que reciba y
 *         retorne el mismo tipo de dato.
 *
 *
 * IMPORTANTE:
 *  			  - Los tipos genéricos pueden ser implementados en las
 *                  interfaces y clases.
 *  			  - Los tipos genéricos deben ser escritos en mayúscula,
 *                  siendo una buena práctica.
-------------------------------------------------------------------------- */

interface Fruit {
	name: string;
	color: string;
}

// Función con tipo de dato genérico
function showGeneric<T>(value: T): T {
	console.log(value);
	return value;
}

// Función con tipo de dato genérico restringido (solo acepta valores que implementen la interfaz Fruit)
function showGenericLimited<T extends Fruit>(value: T): T {
	console.log(value);
	return value;
}

// Sin definir el tipo de dato (TypeScript lo infiera)
showGeneric('Hello World!');
showGeneric([1, 2, 3, 4, 5]);

// Definiendo el tipo de dato
showGeneric<string>('Hello World!');
showGeneric<Array<number>>([1, 2, 3, 4, 5]);
