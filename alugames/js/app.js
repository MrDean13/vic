function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if(imagem.classList.contains("dashboard__item__img--rented")){
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Motivo";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent= "Ocultar";

    }

}

function alterarNome(id){

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let nome = document.getElementById(`nome-${id}`);

    if(imagem.classList.contains("dashboard__item__img--rented")){
        
        nome.textContent="Seus Olhos Iluminam meus dias";
    } else{
        nome.textContent=`Motivo ${id}`;
    }
}