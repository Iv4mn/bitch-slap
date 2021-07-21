function bitchslap() {
	document.getElementById('bitch').src = "bitch-slap.gif";
	var elementosClaseCambiar = document.getElementsByClassName('cambiar');
	for (var i = 0; i < elementosClaseCambiar.length; i++) {
		document.getElementsByClassName('cambiar')[i].innerHTML = "¡¡¡TOMA BITCH SLAP!!!";
	}
}