/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Los tipos personalizados son útiles para crear un conjunto de
 *         valores aceptados.
-------------------------------------------------------------------------- */

// Tipos personalizados
type Dog = 'Perro';
type Cat = 'Gato';
type Animal = Dog | Cat; // Conjunto.

const pet: Animal = 'Perro';
// const pet: Animal = 'Caballo'; // Me arroja un error.
