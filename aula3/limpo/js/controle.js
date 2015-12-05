// Uma linha de comentários.

/* 
	Um Bloco
	de comentários
	aqui.
*/


// Declaração de variáveis:
var _pergunta;
var _resA;
var _resB;
var _resC;
var _resD;
var _resE;
var _altCorreta;
var _pontos;

// Atribuir valor para variáveis:
_pergunta = "Primeira pergunta teste.";
_resA = "Alternativa A";
_resB = "Alternativa B";
_resC = "Alternativa C";
_resD = "Alternativa D";
_resE = "Alternativa E";
_altCorreta = "B";
_pontos = 0;

// criando uma função em JS:
function imprimeQuestao(){
	document.getElementById("questao").innerHTML = _pergunta;
	document.getElementById("resA").innerHTML = _resA;
	document.getElementById("resB").innerHTML = _resB;
	document.getElementById("resC").innerHTML = _resC;
	document.getElementById("resD").innerHTML = _resD;
	document.getElementById("resE").innerHTML = _resE;	
}

// executando uma função:
imprimeQuestao();

function respostaUsuario(_opc){
	alert("Resposta = "+_opc);
}