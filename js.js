document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formres');
    const confirmationDiv = document.getElementById('confirmar');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const confirmationMessage = `¡Felicitaciones ${name}! Ya realizate tu reservacion para la fecha ${date} a las ${time}. Muchas Gracias.`;

        confirmationDiv.textContent = confirmationMessage;
        form.reset();
    });
});
