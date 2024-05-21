document.addEventListener('DOMContentLoaded', function() {
    const colorForm = document.getElementById('colorForm');

    colorForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Зупиняємо відправку форми для зміни кольору фону
        const colorSelect = document.getElementById('colorSelect');
        document.body.style.backgroundColor = colorSelect.value;
    });
}); 