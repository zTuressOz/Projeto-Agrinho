const menuButton = document.querySelector('#checkbox-menu');
const menu = document.querySelector('.sidebar-menu');

menuButton.addEventListener('change', () => {
    menu.classList.toggle('active');
});

function abrirAba(evt, conteudoId) {
    var conteudos = document.getElementsByClassName("conteudo-tab");
    for (var i = 0; i < conteudos.length; i++) {
        conteudos[i].style.display = "none";
    }

    var tabs = document.getElementsByClassName("tab")[0].getElementsByTagName("button");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("ativo");
    }

    document.getElementById(conteudoId).style.display = "block";
    evt.currentTarget.classList.add("ativo");
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("Página carregada"); // Verifica se a página está sendo carregada corretamente
    
    const comprarBtns = document.querySelectorAll('.comprar');
    const modalCompra = document.getElementById('modal-compra');
    const modalAgradecimento = document.getElementById('modal-agradecimento');
    const closeModalCompra = document.querySelector('#modal-compra .close');
    const btnConfirmar = document.querySelector('.btn-confirmar');
    const btnFechar = document.querySelector('.btn-fechar');

    modalCompra.style.display = 'none';
    modalAgradecimento.style.display = 'none';

    comprarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            console.log("Botão comprar clicado"); 
            modalCompra.style.display = 'block'; 
        });
    });

    closeModalCompra.addEventListener('click', function() {
        console.log("Fechar modal de compra clicado");
        modalCompra.style.display = 'none'; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalCompra) {
            console.log("Clique fora do modal de compra");
            modalCompra.style.display = 'none'; 
        }
    });


    btnConfirmar.addEventListener('click', function() {
        console.log("Botão confirmar clicado");
        modalCompra.style.display = 'none'; 
        modalAgradecimento.style.display = 'block';
    });

    btnFechar.addEventListener('click', function() {
        console.log("Fechar modal de agradecimento clicado");
        modalAgradecimento.style.display = 'none'; 
    });

    window.addEventListener('click', function(event) {
        if (event.target === modalAgradecimento) {
            console.log("Clique fora do modal de agradecimento");
            modalAgradecimento.style.display = 'none'; 
        }
    });
})

