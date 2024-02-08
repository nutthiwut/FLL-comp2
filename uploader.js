function uploadImage() {
  const input = document.getElementById('imageInput');

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;

      // Check local storage quota before storing
      try {
        const storedImages = JSON.parse(localStorage.getItem('images')) || [];
        storedImages.push(imageUrl);
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
