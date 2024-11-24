document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');

    // Redirect to index.html after 5 seconds
    setTimeout(() => {
        window.location.href = "index.html"; // Redirect to the main page
    }, 9000); // 5 seconds delay

    // Handle button click event
    startBtn.addEventListener('click', () => {
        window.location.href = "main.html"; // Redirect to the main page immediately
    });
});
