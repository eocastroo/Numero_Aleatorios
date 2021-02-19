var z;
for (var i = 0; i < 10; i++) {

z = aleatorio(10,20);

 document.write(z, ",");

}

function aleatorio(maxi,mini)
{
	var resultado;

resultado = Math.floor(Math.random() * (maxi - mini +1)) + mini
return resultado


}
