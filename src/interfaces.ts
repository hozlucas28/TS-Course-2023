/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Las interfaces me permiten crear objetos a partir de una serie de
 *         atributos tipados, como si de JavaScript se tratase. Si queremos
 *         inicializar los atributos de una interfaz, basta con remplazar
 *         el tipo de dato con dicho valor.
 *
 *
 * IMPORTANTE:
 *  			  - Las interfaces pueden implementar la keyword <extends>,
 *                  como si se tratase de una clase.
-------------------------------------------------------------------------- */

interface Person {
	firstName?: string; // Atributo opcional.
	lastName: string;
	age: number;
	isAlive: boolean;
	location: 'Argentina' | 'Chile' | 'Colombia' | 'Ecuador' | 'Perú' | 'Venezuela'; // Conjunto de tipos personalizados.
}

interface Employee {
	id: number;
	role: string;
	person: Person; // Interface anidada.
}

// Interface con atributos inicializados.
interface User {
	id: 2;
	name: 'Lucas';
	email: ['hozlucas28@gmail.com'];
}
