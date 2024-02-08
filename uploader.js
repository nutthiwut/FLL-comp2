function uploadImage() {
  const input = document.getElementById('imageInput');

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;

      try {
        let storedImages = JSON.parse(localStorage.getItem('images')) || [];

        // Limit the number of stored images (for example, keep only the last 10)
        const maxStoredImages = 10;
        storedImages.push(imageUrl);
        storedImages = storedImages.slice(-maxStoredImages);

        localStorage.setItem('images', JSON.stringify(storedImages));
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
