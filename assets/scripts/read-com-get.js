function buscaProdutos() {

    fetch('http://localhost:3000/produtos', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(resposta => resposta.json())
        .then(resposta => {

            for (let i = 0; i < resposta.length; i++) {

                const ul = document.createElement('ul');
                ul.classList.add('produto');

                ul.appendChild(document.createElement('li')).
                    innerHTML = resposta[i].id;
                ul.appendChild(document.createElement('li')).
                    innerHTML = resposta[i].descricao;
                ul.appendChild(document.createElement('li')).
                    innerHTML = resposta[i].preco;

                const liDelete = document.createElement('li');
                const btDelete = document.createElement('button');
                btDelete.innerHTML = 'X';
                btDelete.value = resposta[i].id;
                btDelete.classList.add('delete-button');

                ul.appendChild(liDelete).appendChild(btDelete);

                document.querySelector('#listaProdutos').appendChild
                    (ul);
            }
        });
}

export { buscaProdutos }