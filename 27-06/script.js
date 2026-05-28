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
        const listaTarefas = document.getElementById('lista_tarefas');
        listaTarefas.appendChild(novaTarefa);

        contador++;

        mensagem = 'Adicionado com sucesso';
        cor = 'green';
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

function tarefaValida(tarefa){
    return tarefa.trim().length > 5;
    }

 function limparTarefas(){
    listaTarefas.textContent = '';
    contadorElement.textContent = `Adicione Tarefas!`;
    mensagemElement.textContent = 'Tarefas limpas com sucesso';

}