document.querySelector('#listaprodutos').addEventListener('click', event => {

    if (event.target.parentElement.classList.contains('produto')) {

        const elementoBase = event.target.parentElement;

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="id"]').innerHTML;

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="descricao"]').innerHTML;

        document.querySelector('input#id').value = elementoBase.querySelector('[data-produto="preco"]').innerHTML;

    }
});

function verificaSeInputsEstaoPreenchidos() {

    const idPreenchido = document.querySelector('input#id').value !== "";
    const descricaoPreenchido = document.querySelector('input#descricao').value !== "";
    const precoPreenchido = document.querySelector('input#preco').value !== "";

    if (idPreenchido || descricaoPreenchido || precoPreenchido) {
        document.querySelector('button#btCancelar').removeAttribute('disabled');
        if (idPreenchido) {
            document.querySelector('button#btAtualizar').removeAttribute('disabled');

        } else {
            document.querySelector('button#btAtualizar').setAttribute('disabled', '');
        }

    } else {
        document.querySelector('button#Cancelar').setAttribute('disabled', '');
        document.querySelector('button#Atualizar').setAttribute('disabled', '');
    }

    document.querySelector('form').addEventListener('reset', () => {
        document.querySelector('button#btCancelar').setAttribute('disabled', '');
        document.querySelector('button#btAtualizar').setAttribute('disabled', '');
    });

    document.querySelector('form').addEventListener('input', () => {
        verificaSeInputsEstaoPreenchidos();
    });
}

document.querySelector('#btatualizar').addEventListener('click', () => {

    const dados = {
        'id': null,
        'descricao': document.querySelector('#descricao').value,
        'preco': document.querySelector('#descricao').value,
        'atualizado': true
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

fetch('http://localhost:3000/produtos', {
    metohd: 'GET',
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(resposta => resposta.json())
    .then(resposta => {

        for (let i = 0; i < resposta.length; i++) {

            if (resposta[i].atualizado) {
                ul.style.color = 'blue';
            }

            const ul = document.createElement('ul');
            ul.classList.add('produto');
            ul.id = resposta[i].id;

            const liId = document.createElement('li');
            liId.setAttribute('data-produtos', 'id');
            ul.id = resposta[i].descricao;

            const liDescricao = document.createElement('li');
            liId.setAttribute('data-produtos', 'descricao');
            ul.id = resposta[i].preco;

            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].id;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].descricao;
            ul.appendChild(document.createElement('li')).innerHTML = resposta[i].preco;

            document.querySelector('#listaprodutos').appendChild(ul);
        }
    });

export { buscaProdutos } 
import { buscaProdutos } from "./read-com-get-js";