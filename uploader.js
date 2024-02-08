document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://your-backend-api/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result); // Handle the response from the backend
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
});
