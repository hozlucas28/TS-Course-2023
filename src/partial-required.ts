/* --------------------------------------------------------------------------
 * IMPORTANTE:
 *  			  - <Required> = Convierte todas las propiedades opcionales
 *                               en obligatorias.
 *  			  - <Partial> = Indica que no necesariamente todas las
 *                              propiedades deben estar incluidas.
-------------------------------------------------------------------------- */

interface Computer {
	id: number;
	model: string;
	cpu: string;
	ram: number;
	disk: number;
	monitor?: string;
}

// Partial
function generateComputer(computer: Partial<Computer>): Computer {
	return {
		id: 10,
		model: 'Apple',
		cpu: 'M2',
		ram: 32,
		disk: 1000,
		...computer
	};
}

const myComputer01 = generateComputer({
	cpu: 'M1',
	disk: 512
});

// Required
const myComputer02: Required<Computer> = {
	...generateComputer({}),
	monitor: 'LG'
};
