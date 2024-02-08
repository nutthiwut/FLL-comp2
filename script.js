function uploadFolder() {
    const uploadInput = document.getElementById('uploadInput');
    const files = uploadInput.files;

    if (files.length > 0) {
        const formData = new FormData();

        for (const file of files) {
            formData.append('files[]', file);
        }

        // Send the FormData to the Receiver Site's endpoint
        fetch('https://receiver-site.com/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log('Folder uploaded successfully');
            } else {
                console.error('Failed to upload folder');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        console.error('No files selected');
    }
}