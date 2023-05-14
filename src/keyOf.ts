/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   El operador <keyOf> me permite utilizar los atributos de un objeto
 *         como un tipo.
-------------------------------------------------------------------------- */

interface Person01 {
	id: string;
	name: string;
	lastName: string;
	email: string;
	address?: string;
	telephone?: string;
}

let myVar: keyof Person01 = 'name'; // keyof <INTERFACE> = <ATRIBUTO DE LA INTERFAZ>
