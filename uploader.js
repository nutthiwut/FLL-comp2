function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        fetch('https://your-backend-api/upload', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            console.log('Upload Success:', data.message);
            // You can take additional actions based on the server response
        })
        .catch(error => {
            console.error('Upload Error:', error);
        });
    }
}
