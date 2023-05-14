/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como declarar funciones, definiendo
 *         los tipos de datos de sus parámetros y retornos.
 * 
 * 
 * TIPO DE RETORNO:
 *                - <void> = Indica que la función no devuelve ningún valor.
 *                - <never> = Indica que nunca se retornara un valor, por ejemplo
 *                            al arrojar un error.
-------------------------------------------------------------------------- */

// Función por declaración con un dato <number> como retorno
function fn01(x: number, y: number): number {
	return x + y;
}

// Función por declaración con un parámetro opcional
function fn02(x: number, y?: number): number {
	return x && y ? x + y : x;
}

// Función flecha con un dato <boolean> como retorno
const filterAnimals = (value: string): boolean => value.length >= 5;

const animals: Array<string> = ['cat', 'dog', 'bird', 'lion', 'tiger', 'elephant'];
animals.filter(filterAnimals);
