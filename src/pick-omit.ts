/* --------------------------------------------------------------------------
 * IMPORTANTE:
 *  			  - <Omit> = Se utiliza para crear un objeto a partir de otro,
 *                           eliminando algunas propiedades.
 *  			  - <Pick> = Se utiliza para crear un objeto a partir de otro,
 *                           tomando algunas propiedades.
-------------------------------------------------------------------------- */

interface Computer {
	id: number;
	model: string;
	cpu: string;
	ram: number;
	disk: number;
	monitor?: string;
}

// Omit
type SubComputer01 = Omit<Computer, 'cpu' | 'ram'>;

const mySubComputer01: SubComputer01 = {
	id: 10,
	model: 'Apple',
	disk: 1000
};

// Pick
type SubComputer02 = Pick<Computer, 'id' | 'model'>;

const mySubComputer02: SubComputer02 = {
	id: 10,
	model: 'Apple'
};
