document.getElementById('uploadForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('UploaderCloudAPI/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log(result); // Handle the response from the cloud service
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    }
});
