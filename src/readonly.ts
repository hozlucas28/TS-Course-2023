/* --------------------------------------------------------------------------
 * IMPORTANTE:
 *  			  - <Readonly> = Bloquea la posibilidad de modificar los
 *                               atributos del objeto asociado, volviéndolo
 *                               inmutable.
-------------------------------------------------------------------------- */

interface Computer {
	id: number;
	model: string;
	cpu: string;
	ram: number;
	disk: number;
	monitor?: string;
}

const myComputer: Readonly<Computer> = {
	id: 10,
	model: 'Apple',
	cpu: 'M2',
	ram: 32,
	disk: 1000
};

// myComputer.id = 20; // Me arroja un error.
