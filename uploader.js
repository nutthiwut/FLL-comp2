function uploadImage() {
  const input = document.getElementById('imageInput');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageUrl = e.target.result;

      try {
        const customHeaders = {
          'Authorization': 'Bearer your-access-token',
        };

        // Use the Fetch API to upload the image
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

            // Extract the image URL from the response
            return response.json();
          })
          .then(data => {
            // Fetch images from the server
            fetch('http://localhost:3000/api/data')
              .then(response => response.json())
              .then(imageUrls => {
                displayImages(imageUrls);
              })
              .catch(error => {
                console.error('Error fetching images:', error);
              });
          })
          .catch(error => {
            console.error('Failed to store image:', error);
          });
      } catch (error) {
        console.error('Failed to store image:', error);
      }
    };

    reader.readAsDataURL(file);
  } else {
    console.error('Please select an image to upload.');
  }
}

function displayImages(images) {
  // Display images in the UI as needed
  // ...
}
