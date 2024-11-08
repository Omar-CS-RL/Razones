document.addEventListener("DOMContentLoaded", function () {
    const revealButton = document.getElementById("revealButton");
    const messagesContainer = document.getElementById("messagesContainer");
    const messages = document.querySelectorAll(".animated-message");
    const finalMessage = document.getElementById("finalMessage");
    let messageIndex = 0;

    revealButton.addEventListener("click", () => {
        revealButton.style.display = "none"; // Ocultar el botón después de hacer clic
        messagesContainer.classList.remove("hidden"); // Mostrar el contenedor de mensajes
        revealNextMessage();
    });

    function revealNextMessage() {
        if (messageIndex < messages.length) {
            messages[messageIndex].style.opacity = 1; // Mostrar el mensaje actual
            setTimeout(revealNextMessage, 2500); // Pasar al siguiente mensaje después de un tiempo
            messageIndex++;
        } else {
            // Mostrar el girasol y el mensaje final después de los mensajes
            setTimeout(() => {
                finalMessage.classList.remove("hidden");
            }, 1500);
        }
    }
});
