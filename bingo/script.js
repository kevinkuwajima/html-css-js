console.log ("Carregou o Script!") ;

    var numeros_sorteados = [];

function sortear (){
    var minimo = 1;
    var maximo = 75;
    var random = Math.floor(Math.random() * (maximo - minimo +1)) + minimo;
    if(numeros_sorteados.length == maximo){
        alert("Ja sorteou todos numeros!");
        return;
    }
    if(numeros_sorteados.includes(random)){
       return sortear ();
    }
    //adicionando um item no array "numeros_sorteados"
    numeros_sorteados.push(random);
    console.log(numeros_sorteados);
    pintar_numeros_sorteados ();
    return random;
}

function pintar_numeros_sorteados () {
    var divs_numeros_disponiveis = document.querySelectorAll("div#numeros_sorteio div");
    
    //tirando todos os "class"
    for(var div of divs_numeros_disponiveis){
        div.removeAttribute("class");
    }



    for(var numero of numeros_sorteados){
        for(var div of divs_numeros_disponiveis){
            if(numero == div.innerText) {
                div.setAttribute("class", "sorteado");
            }
        }
    }
    
    mostrar_ultimos_sorteados ();
}

function mostrar_ultimos_sorteados(){
    var div_ultimos_sorteados = document.querySelector ("div#ultimos_sorteados");
    var ultimos_5 = [];
    var total_sorteio = numeros_sorteados.length;
    if(total_sorteio >5){
        for(var x = total_sorteio -5; x < total_sorteio; x++){
            ultimos_5.push(numeros_sorteados[x]);

        }
        div_ultimos_sorteados.innerText = ultimos_5.join(" - ");

    } else {
    div_ultimos_sorteados.innerText = numeros_sorteados.join(" - ");
    }
} 

    function novo_jogo(){
        var confirmou = confirm("Tem certeza que quer um jogo novo?");
        if(confirmou == true){
            console.log("Resetar o bingo");
            numeros_sorteados = [];
            pintar_numeros_sorteados ();
        }else {
            console.log("Nao resetar o bingo");
        }
    }

    