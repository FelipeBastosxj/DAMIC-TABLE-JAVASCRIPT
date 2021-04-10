let tabela = document.querySelector('.estrutura')
let inputs = document.querySelectorAll('input')
let add = document.querySelector('.add')

function adicionar(valor1, valor2){
   div = document.createElement('div')
   div.innerHTML = '<div>' + valor1 + '</div>' + '<div>' + valor2 + '</div>' + "<div class=remover><button>X</button></div>"
   div.classList.add('descricao')
   tabela.appendChild(div)

}

function receberValue(){
    if(inputs[0].value === '' || inputs[1].value === ''){
        alert('PREENCHA TUDO')
    }else{
        nome = inputs[0].value
        idade = inputs[1].value

        adicionar(nome,idade)
    }
}

add.addEventListener('click', receberValue)


/* remover tabela*/

setInterval(()=>{
    remover = document.querySelectorAll('.remover') 
    console.log(remover)

    function apagar(){
        node = this.parentNode
        node.remove();
    }
    
    remover.forEach(e =>{
        e.addEventListener('click', apagar)
    })
    
},1000)


