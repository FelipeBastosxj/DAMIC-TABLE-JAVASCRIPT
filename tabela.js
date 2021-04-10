let tabela = document.querySelector('.estrutura')
let inputs = document.querySelectorAll('input')
let add = document.querySelector('.add')

function adicionar(valor1, valor2){
   div = document.createElement('div')
   div.innerHTML = '<div>' + valor1 + '</div>' + '<div>' + valor2 + '</div>' + "<div class=editar><button>editar</button></div>" + "<div class=remover><button>X</button></div>"
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
   let remover = document.querySelectorAll('.remover') 
   let editar = document.querySelectorAll('.editar') 

    function apagar(){
        node = this.parentNode
        node.remove();
    }
    
    remover.forEach(e =>{
        e.addEventListener('click', apagar)
    })

    function mudar(){
       nome = prompt("Qual nome deseja colocar?")
       idade = prompt("Qual idade deseja colocar?")

       nonde2 = this.parentNode
       nonde2.children[0].innerHTML = nome;
       nonde2.children[1].innerHTML = idade;
    }

    editar.forEach(e =>{
        e.addEventListener('click', mudar)
    })
    
},1000)


