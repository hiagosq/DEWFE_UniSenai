const inputElement = document.getElementById('nova_tarefa');
const mensagemElement = document.getElementById('mensagem');
const listaTarefas = document.getElementById('lista_tarefas');
const contadorElement = document.getElementById('mensagem_saudacao');

function adicionarTarefa(){
    let tarefa = inputElement.value;
    let mensagem, cor;
    let contador = listaTarefas.children.length;


    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);

        let botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';

        botaoExcluir.onclick = function() {
            listaTarefas.textContent = '';
            contadorElement.textContent = `Adicione Tarefas!`;
            botaoExcluir.remove();
            contador = 0;
        }

        if(contador < 1){
            document.querySelector('.container').appendChild(botaoExcluir);
        }


        contador++;

        mensagem = 'Adicionado com sucesso';
        cor = 'green';
        verificarTarefas();
    }
    else{
        mensagem = 'Erro, digite uma tarefa';
        cor = 'red';
    }

    inputElement.value = '';
    inputElement.focus();
    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
    contadorElement.textContent = `Total de tarefas: ${contador}`;
}

function verificarTarefas(){
    if(listaTarefas.children.length > 0){
        limparTarefas();
    }
}

function tarefaValida(tarefa){
    return tarefa.trim().length > 5;
    }