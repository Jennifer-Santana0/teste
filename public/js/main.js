const addCarts = document.querySelectorAll('.addToCartButton');

addCarts.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();

        let form = button.closest('form');
        let rota = form.getAttribute('action');
        let segments = rota.split('/');


        let produto = segments[2];
        let preco = segments[3];
        let id_produto = segments[4];

        let data = {
            produto: produto,
            preco: preco,
            id_produto: id_produto
        };

        let xhr = new XMLHttpRequest();
        xhr.open('POST', rota);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
            if (xhr.status === 200) {
                console.log('Produto adicionado ao carrinho com sucesso');
            } else {
                console.error('Erro ao adicionar produto ao carrinho:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Erro ao adicionar produto ao carrinho:', xhr.statusText);
        };
        xhr.send();
    });
});


function showGif() {
    var button = document.querySelector('.animation');
    button.classList.add('show-gif'); // Adiciona a classe show-gif ao botão
    setTimeout(function() {
        button.classList.remove('show-gif'); // Remove a classe após um intervalo de tempo (se desejar que o GIF desapareça depois de um tempo)
    }, 3000); // Tempo em milissegundos, 3000 = 3 segundos (você pode ajustar conforme necessário)
    return false; // Para evitar que o formulário seja enviado
}
