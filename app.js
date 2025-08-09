//let titulo = document.querySelector(`h1`);
//titulo.innerHTML = "Jogo do número secreto"

//let paragrafo = Document.querySelector(`p`);
//paragrafo.innerHTML = "Escolha um número entre 1 e 10";

let numeroMaximo = 100;
let numerosSorteados = [];
let numeroSecreto = gerarNumeroaleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}

function exibirMensagemInicial() {
    exibirTextoNaTela(`h1`, `Jogo do número secreto`);
    exibirTextoNaTela(`p`,`Escolha um número entre 1 e ${numeroMaximo}`)
}

exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector(`input`).value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns, você acertou!');
        exibirTextoNaTela(`p`, `Você descobriu o número secreto em ${tentativas} ${tentativas > 1 ? `tentativas`:`tentativa`}!`);
        document.getElementById("reiniciar").removeAttribute("disabled")

 } else { exibirTextoNaTela('h1', 'Você errou, tente novamente.');

    if (chute > numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
    } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
    }
    tentativas++;
    limparCampo()
 }
    console.log(chute == numeroSecreto);
}

function gerarNumeroaleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumerosNaLista = numerosSorteados.length;

    if (quantidadeNumerosNaLista == numeroMaximo) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroaleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroaleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true)


}