function displayImage() {
    const fileInput = document.getElementById('fileInput');
    const uploadedImage = document.getElementById('uploadedImage');

    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
