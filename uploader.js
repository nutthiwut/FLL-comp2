// uploader.js

document.addEventListener('DOMContentLoaded', function () {
  function uploadImage() {
    const input = document.getElementById('imageInput');
    const file = input.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageUrl = e.target.result;

        try {
          let storedImages = JSON.parse(localStorage.getItem('images')) || [];
          storedImages.push(imageUrl);

          // Limit the number of stored images (for example, keep only the last 10)
          const maxStoredImages = 10;
          storedImages = storedImages.slice(-maxStoredImages);

          localStorage.setItem('images', JSON.stringify(storedImages));
          alert('Image uploaded successfully!');
        } catch (error) {
          console.error('Failed to store image in local storage:', error);
          alert('Failed to store image. Local storage quota exceeded.');
        }
      };

      reader.readAsDataURL(file);
    } else {
      alert('Please select an image to upload.');
    }
  }

  // Attach the uploadImage function to the button click event
  const uploadButton = document.getElementById('uploadButton');
  if (uploadButton) {
    uploadButton.addEventListener('click', uploadImage);
  } else {
    console.error('Button with ID "uploadButton" not found.');
  }
});
