document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();// Evita que se recargue la página

    // Corrección: IDs actualizados
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }
    
    // Enviar los datos al endpoint de Firebase Functions
    fetch("https://us-central1-madelein-monzon.cloudfunctions.net/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, telefono, mensaje }),
    })
        .then((response) => {
            if (response.ok) {
                alert("Mensaje enviado correctamente");
            } else {
                alert("Error al enviar el mensaje");
            }
        })
        .catch((error) => {
            console.error("Error en la solicitud:", error);
            alert("Error al enviar el mensaje");
        });
});
