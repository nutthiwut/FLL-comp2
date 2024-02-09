async function uploadImage() {
  const input = document.getElementById('imageInput');
  const file = input.files[0];

  if (file) {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Image uploaded successfully!');
      } else {
        const data = await response.json();
        alert(`Failed to upload image. Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Failed to upload image. Please try again.');
    }
  } else {
    alert('Please select an image to upload.');
  }
}
