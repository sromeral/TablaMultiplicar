var numero = parseInt(prompt("Escribe un número"));
var tabla = document.getElementById("tabla");

if (! isNaN(numero)) {
	for (var i = 1; i <= 10; i++) {
		var fila = document.createElement("li");
		
		fila.appendChild(document.createTextNode(numero + " * " + i + " = " + (numero * i)));
		tabla.appendChild(fila);
	}
}