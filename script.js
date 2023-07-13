document.getElementById('virtualAccountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = document.getElementById('virtualAccountForm');
    const formData = new FormData(form);

    const json = {};
    formData.forEach(function(value, key) {
        json[key] = value;
    });

    fetch('https://okoroaforkelechidivine.github.io/seerbit-subscription/api/v2/virtual-accounts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(json)
    })
        .then(function(response) {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error occurred. Please try again.');
            }
        })
        .then(function(data) {
            displayResponseMessage(data.message);
        })
        .catch(function(error) {
            displayResponseMessage(error.message);
        });
});

function displayResponseMessage(message) {
    const container = document.getElementsByClassName('container')[0];
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    container.appendChild(messageElement);
}
