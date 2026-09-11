const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        alert(
            "Olá! Entre em contato conosco pelo WhatsApp."
        );

    });

});