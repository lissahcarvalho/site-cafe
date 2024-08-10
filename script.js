document.addEventListener("DOMContentLoaded", function() {
    // Função para manipular a navegação entre páginas
    function navigateTo(page) {
        window.location.href = page;
    }

    // Adicionando evento de clique para os itens do menu
    document.querySelectorAll('nav ul li a').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const page = item.getAttribute('href');
            navigateTo(page);
        });
    });

    // Adicionando evento de clique para os itens do rodapé
    document.querySelectorAll('footer ul li a').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const page = item.getAttribute('href');
            navigateTo(page);
        });
    });

    // Exemplo de função para o botão de adicionar ao carrinho
    document.querySelectorAll('.produto button').forEach(button => {
        button.addEventListener('click', event => {
            alert('Produto adicionado ao carrinho!');
        });
    });
});