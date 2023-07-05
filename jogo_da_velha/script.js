console.log("Carregou com sucesso!");

//vamos configurar o evento clique dos tds jogáveis
var tds_jogaveis = document.querySelectorAll("tbody td");
for (var n = 0; n < tds_jogaveis.length; n++) {
    var td = tds_jogaveis[n];
    td.indice = n;
    td.addEventListener("click", clicou_no_td);

}

//pontos
var pontos_jogador = 0;
var pontos_cpu = 0;

//posições do jogo
var posicoes_jogo = [
    "", "", "",
    "", "", "",
    "", "", ""

]

//popular posições já preenchidas
function popular_posicoes() {
    for (var n = 0; n < posicoes_jogo.length; n++) {
        var jogada = posicoes_jogo[n];
        var cor_jogada = "";
        if (jogada == "X") {
            cor_jogada = "vermelho";
        }

        if (jogada == "O") {

            cor_jogada = "verde";
        }

        tds_jogaveis[n].innerHTML = "<div class=' " + cor_jogada + " '>" + jogada + "</div>"
    }

}

// popular_posicoes();

//reiniciar partida
function reiniciar() {
    //pontos_jogador = 0;
    //pontos_cpu = 0;
    mostrar_placar();
}

//mostrar placar atual
function mostrar_placar() {
    var pjogador = document.querySelector("#pontos_jogador");
    var pcpu = document.querySelector("#pontos_cpu");
    pjogador.innerText = pontos_jogador;
    pcpu.innerText = pontos_cpu;
}

//definindo funções
function clicou_no_td(event) {
    var indice = event.currentTarget.indice;
    if (posicoes_jogo[indice] == "") {
      //  event.target.innerHTML = "<div class='verde'>O</div>";
        posicoes_jogo[indice] = "O";
    }
    console.log (posicoes_jogo);
    popular_posicoes();

    //verificar se tem um ganhador ou empate
    var tem_ganhador = verifica_ganhador();
    if(tem_ganhador == true){
        return;
    }
    //chamar aqui a função da jogada da cpu

    jogada_cpu();
}

function verifica_ganhador(){
    var espacos_vazios = posicoes_jogo.filter(item => item== "");
    console.log(espacos_vazios.length);
   

    //começa a verificar ganhador
    var linha1coluna1 = posicoes_jogo[0];
    var linha1coluna2 = posicoes_jogo[1];
    var linha1coluan3 = posicoes_jogo[2];
    
    if(linha1coluna1 == "O" && linha1coluna2 == "O" && linha1coluan3 == "O"){
        pontos_jogador++;
        mostrar_placar();
        return true;
    } 
    if (linha1coluna1 == "X" && linha1coluna2 == "X" && linha1coluan3 == "X"){
        pontos_cpu++;
        mostrar_placar();
        return true;
    
    }
    if(espacos_vazios.length == 0){
        return true;
    }


    // return true;
}

 function numero_aleatorio(minimo, maximo){
    var numero_sorteado = Math.floor(Math.random() * (maximo - minimo +1)) + minimo;
    return numero_sorteado;
 }

 function jogada_cpu(){
    var posicao_possivel = numero_aleatorio(0,8);
    if(posicoes_jogo[posicao_possivel] == ""){
        posicoes_jogo[posicao_possivel] = "X";
        verifica_ganhador();
    } else{
        jogada_cpu();
    }
    popular_posicoes();
 }


//no final de tudo

reiniciar();


