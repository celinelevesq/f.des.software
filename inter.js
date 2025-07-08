let botao = document.querySelector("#ola");
let resposta = document.querySelector("#hello");
let resposta2 = document.querySelector("#hello2");
botao.addEventListener("click",annyeong);


function annyeong(){
    resposta.innerHTML = "Algumas luzes são ambiciosas, algumas luzes são rebeldes"
    resposta2.innerHTML = "Todo mundo emite luz, cada uma delas é preciosa"
}