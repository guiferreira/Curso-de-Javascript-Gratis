var _pontos = 0;
var _respCorreta;
var _quantidade_respostas = 0;

// criando uma função em JS:
function imprimeQuestao(objeto){
	document.getElementById("questao").innerHTML = objeto.pergunta;
	document.getElementById("resA").innerHTML = objeto.resA;
	document.getElementById("resB").innerHTML = objeto.resB;
	document.getElementById("resC").innerHTML = objeto.resC;
	document.getElementById("resD").innerHTML = objeto.resD;
	document.getElementById("resE").innerHTML = objeto.resE;
	_respCorreta = 	objeto.correta;
		
	_quantidade_respostas++;
	setProgress();
	document.getElementById("questoes_respondidas").innerHTML = _quantidade_respostas;
	
}

function sorteiaQuestao(perguntasArray){
	//var _numero = Math.floor(Math.random() * perguntasArray.length); // sorteia um número de 0 até quantidade total de elementos do Array.
	var _numero = varUnico(perguntasArray.length); // sorteia um número de 0 até quantidade total de elementos do Array.
	
	imprimeQuestao(perguntasArray[_numero]);
}

function respostaUsuario(_opc){	
	if (_respCorreta === _opc) {
		_pontos +=10;
		document.getElementById("pontuacao").innerHTML = _pontos;
		//alert("Resposta Correta = "+_opc);
	}
	setTimeout(function() {
		sorteiaQuestao(perguntas);
		limpaRespostas();
	}, 2000);	
}

function limpaRespostas(){
	var ele = document.getElementsByName("radio");
   	for(var i=0;i<ele.length;i++){
   		ele[i].checked = false;
   	}      
}

var sorteados = [];

function varUnico(valorMaximo) {
    if (sorteados.length == valorMaximo) {
        //fim do jogo
        sorteados = [];
        alert("Fim do Jogo!");
        return;
    }
    var sorteio = Math.floor((Math.random() * valorMaximo));
    console.log(sorteio);
    while (sorteados.indexOf(sorteio) >= 0) { 
        sorteio = Math.floor((Math.random() * valorMaximo));
    }
    sorteados.push(sorteio); 
    
    return sorteio; 
}

function getPorcentagem(resp,perg){
	return parseInt((resp*100)/perg);
}

function setProgress(){
	var porcent = getPorcentagem(_quantidade_respostas,perguntas.length);
	var progress = '<div class="progress-bar" role="progressbar"'+
					' aria-valuenow="'+porcent+'" aria-valuemin="0"'+
					' aria-valuemax="100" style="width: '+porcent+'%;">'+porcent+'%</div>';
	document.getElementById("progress").innerHTML = progress;
}


document.getElementById("totalQuestoes").innerHTML = perguntas.length;



// executando uma função:
sorteiaQuestao(perguntas);