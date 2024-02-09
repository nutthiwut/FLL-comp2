function uploadImage() {
  const input = document.getElementById('imageInput');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;

      try {
        const customHeaders = {
          'Authorization': 'Bearer your-access-token', // Replace with your actual access token
        };

        let storedImages = JSON.parse(localStorage.getItem('images')) || [];
        storedImages.push(imageUrl);

        // Limit the number of stored images (for example, keep only the last 10)
        const maxStoredImages = 10;
        storedImages = storedImages.slice(-maxStoredImages);

        fetch('http://localhost:3000/api/upload', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...customHeaders,
          },
          body: JSON.stringify({ imageUrl }),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            localStorage.setItem('images', JSON.stringify(storedImages));
            displayImages(storedImages);
          })
          .catch(error => {
            console.error('Fetch error:', error);
            alert('Failed to upload image.');
          });
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
