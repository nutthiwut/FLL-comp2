function uploadImage() {
  const input = document.getElementById('imageInput');

  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;

      // Simulate uploading to a server (replace this with actual server-side code)
      // In a real scenario, you would send this image data to your server using AJAX or fetch API
      // and save it on the server.

      alert('Image uploaded successfully!');
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please select an image to upload.');
  }
}
