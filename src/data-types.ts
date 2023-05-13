/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra como declarar el tipado de variables.
 * 
 * 
 * IMPORTANTE:
 *                - <any> = Puede asignarse a variables de cualquier tipo.
 *                - <unknown> = Puede asignarse unicamente a variables de tipo unknown.
 *  			  - Si no defino explicitamente el tipo de dato, TypeScript
 *                  puede asumirlo.
-------------------------------------------------------------------------- */

/* --------------------------------- Básicos -------------------------------- */

const myDinamyc = 100; // Tipo de datos <any>.
const myNumber: number = 5; // Tipo de datos <int>.
const myMessage: string = 'Hello World'; // Tipo de datos <string>.

/* -------------------------------- Avanzados ------------------------------- */

// Declaración de un objeto
interface Person {
	name: string;
	age: number;
}

const myArrayOfStrings: Array<string> = ['Hello', 'World']; // Tipo de dato <array> conteniendo datos <string>.
const myArrayOfPersons: Array<Person> = [{ name: 'John', age: 30 }]; // Tipo de dato <array> conteniendo datos <Person>.
