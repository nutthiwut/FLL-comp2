document.addEventListener('DOMContentLoaded', function () {
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

  // Attach the uploadImage function to the button click event
  const uploadButton = document.getElementById('uploadButton');
  if (uploadButton) {
    uploadButton.addEventListener('click', uploadImage);
  } else {
    console.error('Button with ID "uploadButton" not found.');
  }
});
