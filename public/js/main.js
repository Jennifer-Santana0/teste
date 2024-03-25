$(document).ready(function() {
    $('.addToCartButton').click(function(event) {
        event.preventDefault(); // Evita o comportamento padrão do botão

        // Obtém os dados do produto para adicionar ao carrinho
        var form = $(this).closest('form');
        var action = form.attr('action');
        var produto = action.split('/')[2]; // Obtém o nome do produto da rota
        var preco = action.split('/')[3]; // Obtém o preço do produto da rota
        var id_produto = action.split('/')[4]; // Obtém o ID do produto da rota

        // Objeto contendo os dados do produto
        var data = {
            produto: produto,
            preco: preco,
            id_produto: id_produto
        };

        // Envia uma solicitação POST AJAX para o servidor
        $.ajax({
            type: 'POST',
            url: action, // Usa a mesma URL do formulário
            data: data,
            success: function(response) {
                // Lidar com a resposta do servidor, se necessário
                console.log('Produto adicionado ao carrinho com sucesso');
            },
            error: function(xhr, status, error) {
                // Lidar com erros, se houver
                console.error('Erro ao adicionar produto ao carrinho:', error);
            }
        });
    });
});