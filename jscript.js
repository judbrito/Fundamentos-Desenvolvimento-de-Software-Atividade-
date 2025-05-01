/*
 algoritmo ativar frases
*/
 const mensagens = [
            "Se a vida te derrubar sete vezes, levante-se oito. E na nona, finja que não caiu.",
            "A perseverança é tipo dieta: fácil de começar, difícil de manter, e no final você só quer uma pizza.",
            "Programar é divertido!"
        ];

        function mostrarMensagem() {
            const randomIndex = Math.floor(Math.random() * mensagens.length);
            document.getElementById("mensagem").textContent = mensagens[randomIndex];
        }