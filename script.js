const opcoes = ["tesoura","lagarto","pedra","spock","papel"];

const imagens = {
    tesoura:"images/tesoura.png",
    lagarto:"images/lagarto.png",
    pedra:"images/pedra.png",
    spock:"images/spock.png",
    papel:"images/papel.png"
};

let pontosJogador = 0;
let pontosPc = 0;

function jogar(escolhaJogador){

    const escolhaPc = opcoes[Math.floor(Math.random()*5)];

    mostrarCarta("jogadaJogador", escolhaJogador);
    mostrarCarta("jogadaPc", escolhaPc);

    let resultado = "";

    if(escolhaJogador === escolhaPc){
        resultado = "Empate!";
    }

    else if(
        (escolhaJogador==="tesoura" && (escolhaPc==="papel" || escolhaPc==="lagarto")) ||
        (escolhaJogador==="papel" && (escolhaPc==="pedra" || escolhaPc==="spock")) ||
        (escolhaJogador==="pedra" && (escolhaPc==="lagarto" || escolhaPc==="tesoura")) ||
        (escolhaJogador==="lagarto" && (escolhaPc==="spock" || escolhaPc==="papel")) ||
        (escolhaJogador==="spock" && (escolhaPc==="tesoura" || escolhaPc==="pedra"))
    ){
        resultado = "Você venceu!";
        pontosJogador++;
    }

    else{
        resultado = "Computador venceu!";
        pontosPc++;
    }

    document.getElementById("resultado").textContent = resultado;
    document.getElementById("pontosJogador").textContent = pontosJogador;
    document.getElementById("pontosPc").textContent = pontosPc;
}

function mostrarCarta(id, escolha){
    document.getElementById(id).innerHTML =
        `<img src="${imagens[escolha]}">`;
}

/* Modal regras */
const modal = document.getElementById("modalRegras");
const abrir = document.getElementById("btnRegras");
const fechar = document.getElementById("fecharModal");

abrir.onclick = () => {
    modal.style.display = "flex";
};

fechar.onclick = () => {
    modal.style.display = "none";
};

window.onclick = e => {
    if(e.target === modal){
        modal.style.display = "none";
    }
};