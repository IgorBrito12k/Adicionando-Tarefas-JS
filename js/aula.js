
//sempre que eu usar o main, input ou btnAdd eu vou estar referenciando a esses elementosbyid
let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('area-lista');

//resposável por adicionar uma tarefa na lista
function addTarefa() {
    //cada vez que for adicionada uma tarefa, ele irá colocar um id nela
    ++contador;
    //Pegar o valor digitado no input
    let valorInput = input.value
    //se o valor do compo input for diferente de vazio, diferente de nulo e diferente de indefinido
    if((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined));
    //cria um novo item/tarefa
    let novoItem = `<div id="${contador}" class="item">
    <div onclick="marcarTarefa(${contador})" class="item-icone">
        <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
    </div>
    <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
    </div>
    <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete">
            <i class="mdi mdi-delete"></i>Delete</button>
    </div>`;

    //adicionar novo item no main
    main.innerHTML += novoItem;

    //zerar os campinhos
    input.value = "";
    input.focus();
}

function deletar(id){
    var tarefa = document.getElementById(id)
    tarefa.remove();
}
//Função para marcar a tarefa
function marcarTarefa(id){
    //pego o id da tarefa e transformo em item
    var item = document.getElementById(id)
    //passo para a variavel classe a class onde o item se encontra(através do getAttribute)
    var classe = item.getAttribute('class');
    console.log(classe);
    //Se a classe for igual a ícone, ele vai adicionar o efeito de clicado
    if(classe == 'item'){
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id)
        //vamos remover o icone do circulo vazio
        icone.classList.remove('mdi-circle-outline');
        //vamos adicionar o circulo ok
        icone.classList.add('mdi-check-circle');
    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id)
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }

    //fazer com que o item selecionado dessa toda a lista
    //parentnode são os elementos ao lado
    item.parentNode.appendChild(item);
}
// É como que se tivesse colocando código para prestar atenção em comandos do teclado, por exemplo, teclar enter e enviar a tarefa
input.addEventListener("keyup", function(event){
    //se teclou enter(13) - (13 representa a tecla enter do teclado)
    if(event.keyCode ===  13){
    //metodo para impedir que o enter faça qualque outra coisa além de lançar o evento
    event.preventDefault();
    //adiciona a tarefa
    btnAdd.click();
    }
})
