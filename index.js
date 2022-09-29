function atualizarQuantidade(){
    document.getElementById('numeros').innerHTML = buscar().length; //Aqui implementei a contagem da quantidade de tarefas, acrescentando o buscar();
}

function listarTarefas(){
         let conteudo = buscar().sort().map(function (tarefa) { 
            return`
    <div>
        <input type="checkbox"> 
        ${tarefa.titulo} 

        <span class="badge ${tarefa.prioridade === 'Baixa' && 'bg-primary'} 
                           ${tarefa.prioridade === 'Media' && 'bg-warning'} 
                           ${tarefa.prioridade === 'Alta' && 'bg-danger'}">
        ${tarefa.prioridade}
        </span>
    </div>
`;
         
});

document.getElementById('tarefa').innerHTML = conteudo.sort().join(''); //Implementei a ordenação das tarefas por titulo, acrescentando o .sort();

}



function addTarefa(){
    event.preventDefault();


let titulo = document.getElementById ('input_nova_tarefa').value;

if (titulo.trim() === ''){
    alert('Tarefa invalida');
    return;
}

if (buscar().some(tarefa => titulo === tarefa.titulo) === true){ //Aqui fiz a validação para saber se a tarefa já existe, caso o usuário add a mesma tarefa, aparecerá um alert.
    alert('Essa tarefa já existe!');
    return;
}

salvar(titulo, input_prioridade.value);

document.getElementById('input_nova_tarefa').value =''; //troca o valor


  atualizarQuantidade();
  listarTarefas();
}


//vai acontecer assim que o ususario entrar na pagina
listarTarefas();

