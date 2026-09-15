// ==========================================
// BLACK TECH — SCRIPT PRINCIPAL
// ==========================================

// Animação suave dos elementos ao aparecer na tela
const elementos = document.querySelectorAll(
    "section, article, .projeto"
);

const observer = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("aparecer");
                observer.unobserve(entrada.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);

elementos.forEach((elemento) => {
    observer.observe(elemento);
});


// ==========================================
// EFEITO NO CABEÇALHO
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }

});


// ==========================================
// EFEITO NOS BOTÕES
// ==========================================

const botoes = document.querySelectorAll(
    "button, .projeto-btn, .whatsapp-btn"
);

botoes.forEach((botao) => {

    botao.addEventListener("click", () => {

        botao.classList.add("clicado");

        setTimeout(() => {
            botao.classList.remove("clicado");
        }, 150);

    });

});


// ==========================================
// ANO AUTOMÁTICO DO RODAPÉ
// ==========================================

const ano = document.querySelector("footer p");

if (ano) {

    const anoAtual = new Date().getFullYear();

    ano.innerHTML = `© ${anoAtual} Black Tech. Todos os direitos reservados.`;

}


// ==========================================
// LOG DO SISTEMA
// ==========================================

console.log("BLACK TECH iniciado com sucesso.");
console.log("Tecnologia que transforma negócios.");
// ==========================================
// BLACK TECH — FORMULÁRIO DE CONTATO
// ==========================================

const formulario = document.getElementById("contato-form");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const empresa = document.getElementById("empresa").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const texto = `
Olá Black Tech! 👋

Gostaria de conversar sobre um projeto.

👤 Nome: ${nome}

🏢 Empresa: ${empresa || "Não informado"}

📧 E-mail: ${email}

💬 Projeto:
${mensagem}

Enviado através do site da Black Tech.
        `;

        const numero = "5535999227502";

        const url =
            "https://wa.me/" +
            numero +
            "?text=" +
            encodeURIComponent(texto);

        window.open(url, "_blank");

    });

}
