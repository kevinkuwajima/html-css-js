console.log("carregou meu script");

/**
 * TODO :
 * Configurar teclada do reset
 * Configurar a tecla do RAIZ
 * Configurar a tecla do +/- (troca de sinal
 * Configurar a ação e tecla do DEL
 */


var titulo_pagina = "Calculadora Java Script";
var operadores = ["/", "*", "-", "+",];

// variavel do tipo array
var lista_de_cores = ["azul", "vermelho", "preto", "amarelo", "verde"];
// pegar a cor vermelho da lista criada
console.log(lista_de_cores[1]);
var visor_da_calculadora = document.querySelector("div#visor span");
visor_da_calculadora.innerText = "";

var botoes = document.querySelectorAll("div#corpo div#botoes button")


for (var botao of botoes) {
    console.log("passou aqui");
    botao.addEventListener("click", clicou);

}

document.addEventListener("keyup", digitou);

function digitou(event) {
    var lista_teclas_liberadas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "-", "+"];
    var teclas_resultado = ["Enter", "="];
    var teclas_reset = ["Escape"];
    var teclas_del = ["Backspace"];
    var texto_visor = visor_da_calculadora.innerText;
    if (lista_teclas_liberadas.includes(event.key) == true) {
        if (operadores.includes(event.key) == true && texto_visor == "") {
            return;
        }
        var ultimo_digito = texto_visor.substr(texto_visor.length - 1);
        if (texto_visor != "" && operadores.includes(ultimo_digito) == true && operadores.includes(event.key)) {
            //  digitar_no_visor(event.key);
        }
        digitar_no_visor(event.key);
        // digitar_no_visor(event.key);
    }

    if (teclas_resultado.includes(event.key)) {
        exibir_resultado();

    }
    if (teclas_del.includes(event.key)){
        apagar_caracteres();
    }
    console.log(event.key);

}

function tem_operadores_no_visor(numero, operadores) {
    for (var operador of operadores) {
        if (numero.indexOf(operador) != -1) {
            return true;
        }
    }

    return false;
}
function contar_casas_decimais(numero) {
    var numero_convertido_para_texto = numero.toString();
    var posicao_do_ponto = numero_convertido_para_texto.indexOf(".");
    var casas_decimais = numero_convertido_para_texto.substr(posicao_do_ponto + 1);
    return casas_decimais.length;

}

function clicou(event) {
    var texto_botao = event.target.innerText


    if (isNaN(texto_botao) == false) {
        digitar_no_visor(texto_botao);

    } else {
        console.log(texto_botao);

        if (texto_botao == "AC") {
            limpar();

        }

        if (texto_botao == "+/-") {
            inverter_sinal();
        }
        if (texto_botao == "RAIZ") {
            var numero = visor_da_calculadora.innerText;
            if (tem_operadores_no_visor(numero, operadores) == false) {


                var resultado_raiz = Math.sqrt(numero);
                console.log(resultado_raiz);
                if (contar_casas_decimais(resultado_raiz) > 5) {
                    visor_da_calculadora.innerText = resultado_raiz.toFixed(5);
                } else {
                    visor_da_calculadora.innerText = resultado_raiz;
                }

            }
        }
        if (texto_botao == ".") {
            var numero = visor_da_calculadora.innerText;
            if (numero != "" && numero.indexOf(".") == -1) {


                digitar_no_visor(texto_botao);
            }
        }


        if (operadores.includes(texto_botao)) {
            console.log('Clicou em operador')
            var texto_visor = visor_da_calculadora.innerText;
            var ultimo_digito = texto_visor.substr(texto_visor.length - 1);
            if (texto_visor != "" && operadores.includes(ultimo_digito) == false) {
                digitar_no_visor(texto_botao);
            }

        }

        if (texto_botao == "=") {
            // var texto_visor = visor_da_calculadora.innerText;
            // var ultimo_digito = texto_visor.substr(texto_visor.length - 1);
            // if (operadores.includes(ultimo_digito) == false) {
            //     var resultado = eval(texto_visor);
            //     visor_da_calculadora.innerText = resultado;
            // }
            exibir_resultado ();
        }

        if (texto_botao == "DEL"){
            apagar_caracteres ();
          
        }

    }

}

function apagar_caracteres(){
    var texto_visor = visor_da_calculadora.innerText; 
    var texto_sem_ultimo_caracter = texto_visor.substr(0, texto_visor.length -1);
    visor_da_calculadora.innerText = texto_sem_ultimo_caracter;

}
function exibir_resultado() {
    var texto_visor = visor_da_calculadora.innerText;
    var ultimo_digito = texto_visor.substr(texto_visor.length - 1);
    if (operadores.includes(ultimo_digito) == false) {
        var resultado = eval(texto_visor);
        visor_da_calculadora.innerText = resultado;
    }

}
// != é pra diferente // 
function inverter_sinal() {
    var numero = visor_da_calculadora.innerText;
    if (numero != "") {
        console.log("Deu certo, pode trocar o sinal");
        console.log(numero * -1);
        visor_da_calculadora.innerText = numero * -1;
    }
}

function limpar() {
    visor_da_calculadora.innerText = "";
}
// for (var x=0; x < 18; x++) {
//     console.log("passou aqui" +x);
// }



function escreve_titulo() {
    //manipular um elemento html
    document.querySelector('h1').innerText = titulo_pagina;
}
escreve_titulo();

function escreve_titulo_dinamico(titulo) {
    document.querySelector('h1').innerText = titulo;
}

// escreve_titulo_dinamico("Mudei o título da página com JS");
escreve_titulo();

function digitar_no_visor(texto) {
    var visor = document.querySelector('div#visor span');
    var valor_no_visor = visor.innerText;
    visor.innerText = valor_no_visor + texto;
}