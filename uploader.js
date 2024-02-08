function uploadImage() {
  const input = document.getElementById('imageInput');

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;

      // Save the image URL to localStorage (replace with server-side logic)
      const storedImages = JSON.parse(localStorage.getItem('images')) || [];
      storedImages.push(imageUrl);
      localStorage.setItem('images', JSON.stringify(storedImages));
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please select an image to upload.');
  }
}
