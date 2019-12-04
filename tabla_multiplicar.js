var numero = parseInt(prompt("Escribe un número"));
var tabla = document.getElementById("tabla");

if (! isNaN(numero)) {
	if (numero % 2 === 0) {
		for (var i = 1; i <= 10; i++) {
			var fila = document.createElement("li");
			
			fila.appendChild(document.createTextNode(numero + " * " + i + " = " + (numero * i)));
			tabla.appendChild(fila);
		}
	}
}