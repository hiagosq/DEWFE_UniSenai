function adicionarNumero(numero) {
    const display = document.getElementById('display');
    display.value += numero;
}

function adicionarOperacao(operacao) {
    const display = document.getElementById('display');
    display.value += operacao;
}

function limpar() {
    const display = document.getElementById('display');
    display.value = '';
}

function calcular() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}