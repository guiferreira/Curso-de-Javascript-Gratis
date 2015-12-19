var perguntas = []; // Cria um array.

var objeto = {
	pergunta:"Um dos elementos relacionados abaixo não está de acordo com os demais do grupo.",
	resA:"Maracujá",
	resB:"Ameixa",
	resC:"Manga",
	resD:"Pitomba",
	resE:"Abacate",
	correta:"A",
	nivel:"media"
};
perguntas.push(objeto);

var objeto = {
	pergunta:"Dentre os itens abaixo, qual aquele que pode ser considerado um intruso?",
	resA:"Gato",
	resB:"Lobo Guará",
	resC:"Hiena",
	resD:"Vaca",
	resE:"Leão",
	correta:"D",
	nivel:"facil"
};
perguntas.push(objeto);

var objeto = {
	pergunta:'"Amigo" está para "Inimigo" assim como "Alegria" está para:',
	resA:"Triste",
	resB:"Sonho",
	resC:"Risos",
	resD:"Felicidade",
	resE:"Tristeza",
	correta:"E",
	nivel:"facil"
};
perguntas.push(objeto);




_pontos = 0;

// criando uma função em JS:
function imprimeQuestao(objeto){
	document.getElementById("questao").innerHTML = objeto.pergunta;
	document.getElementById("resA").innerHTML = objeto.resA;
	document.getElementById("resB").innerHTML = objeto.resB;
	document.getElementById("resC").innerHTML = objeto.resC;
	document.getElementById("resD").innerHTML = objeto.resD;
	document.getElementById("resE").innerHTML = objeto.resE;	
}

function sorteiaQuestao(perguntasArray){
	var _numero = Math.floor(Math.random() * perguntasArray.length); // sorteia um número de 0 até quantidade total de elementos do Array.
	imprimeQuestao(perguntasArray[_numero]);

}

// executando uma função:
sorteiaQuestao(perguntas);

function respostaUsuario(_opc){
	alert("Resposta = "+_opc);
}