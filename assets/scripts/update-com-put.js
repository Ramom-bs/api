import { buscaProdutos } from "./read-com-get.js";
buscaProdutos;

//desafio 1
document.querySelector('#listaprodutos').addEventListener('click', event => {

    if (event.target.parentElement.classList.contains('produto')) {

        const elementoBase = event.target.parentElement;

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

        document.querySelector('input#descricao').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

        document.querySelector('input#preco').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;

    }
    verificaSeInputsEstaoPreenchidos
});

// desafio 2
function verificaSeInputsEstaoPreenchidos() {

    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";

    if (idPreenchido || descricaoPreenchido || precoPreenchido) {
        document.querySelector('button#btCancelar').removeAttribute('disabled');

    } else {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
    }

    if (idPreenchido) {
        document.querySelector('button#btAtualizar').removeAttribute('disabled');

    } else {
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');
    }
}

//desafio 2: desabilitando o botão reset no formulário    
document.querySelector('form').addEventListener('reset', () => {
    document.querySelector('button#btCancelar').setAttribute('disabled', '');
    document.querySelector('button#btAtualizar').setAttribute('disabled', '');
});

//verifica os campos do formúlario na digitação normal
document.querySelector('form').addEventListener('input', verificaSeInputsEstaoPreenchidos);

document.querySelector('#btatualizar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#preco').value,
    }

    const id = document.querySelector('#id').value;

    fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },

        body: JSON.stringify(dados)
    })

    then(resposta => {
        if (resposta.ok) {
            alert('produtoatualizado');
        }
    });
});
