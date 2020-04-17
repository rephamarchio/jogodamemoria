//função anonima variaveis locais garante exsecução
(function () {
	StartGame();

	function StartGame() {
		for (var i = 0 ; i < 16; i++) {
				var card = document.querySelector("#card" + i);
				 //usando modulo para formatação vertical
				 card.style.left = i % 8 === 0 ? 5 +"px" : i % 8 * 165 +5 +"px";
				 //usando ternario para formataçao vertical
				 card.style.top = i < 8 ? 5 +"px": 250 +"px";
				}}
	
}());