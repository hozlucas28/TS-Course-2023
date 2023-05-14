/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   Los <enums> son útiles porque son descriptivos. Además, sirven
 *         para crear constantes.
 *
 *
 * IMPORTANTE:
 *  			  - Los tipo string son personalizables.
 *  			  - Los tipo numéricos son incrementales, asumen valores del
 *                  tipo <number>.
-------------------------------------------------------------------------- */

// Tipo numérico
enum Flat {
	first,
	Second,
	Third
}

// Tipo string
enum House {
	First = 'First',
	Second = 'Second',
	Third = 'Third'
}
