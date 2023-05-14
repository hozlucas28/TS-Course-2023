/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Las clases en TypeScript utilizan las mismas bases que las clases
 *         en JavaScript, esto incluye la herencia.
 *
 *
 * IMPORTANTE:
 *  			  - Se puede implementar sobrecarga de funciones en los métodos.
 *  			  - Las keywords <public> y <private> limitan el acceso a las
 *                  propiedades y/o métodos.
 *  			  - La keyword <protected> indica que el método es únicamente
 *                  accesible por dicha clase y sus hijas.
 *  			  - Las keywords <get> y <set> se utilizan para definir métodos
 *                  obtenedores/modificadores de propiedades.
 *  			  - Las clases abstractas no pueden ser inicializadas. Se
 *                  utilizan como padres de clases que si pueden ser inicializadas.
 *                  Para definir una clase abstracta se utiliza la keyword <abstract>.
-------------------------------------------------------------------------- */

type Color = 'red' | 'blue' | 'green';

interface ID {
	id: number;
}

class Vehicle implements ID {
	/* -------------------------------- Atributos ------------------------------- */

	public _model: string; // Atributo público.
	private _color: Color; // Atributo privado.

	public id: number; // Atributo público extendido de la interfaz.

	/* ------------------------------ Constructores ----------------------------- */

	constructor(id: number, marca: string = '', color: Color = 'red') {
		this.id = id;
		this._model = marca;
		this._color = color;
	}

	/* ------------------------------ Modificadores ----------------------------- */

	// Retornar modelo.
	get model(): string {
		return this.model;
	}

	// Modificar modelo.
	set model(newModel: string) {
		this.model = newModel;
	}

	/* --------------------------------- Métodos -------------------------------- */

	showDescription() {
		console.log(`This is a ${this._model} and it is ${this._color}`);
	}
}

const myVehicle = new Vehicle(1, 'Ford', 'red');
myVehicle.showDescription();
