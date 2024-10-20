document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <p>Published on ${new Date().toLocaleDateString()}</p>
    `;

    // Clear the form fields
    document.getElementById('postForm').reset();
});
