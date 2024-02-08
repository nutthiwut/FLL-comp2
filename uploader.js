function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const formData = new FormData();
        formData.append('file', file);

        // Here, you can perform an action with the FormData object, such as sending it to a server via AJAX.
        // For simplicity, this example logs the file information to the console.
        console.log('File Name:', file.name);
        console.log('File Size:', file.size);

        // You can include AJAX code here to send the FormData to a server for storage.
    }
}
