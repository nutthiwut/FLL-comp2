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
            // Fetch images from the server instead of using sessionStorage
            fetch('http://localhost:3000/api/data')
              .then(response => response.json())
              .then(imageUrls => {
                displayImages(imageUrls);
              })
              .catch(error => {
                console.error('Error fetching images:', error);
                alert('Failed to fetch images from the server.');
              });
          })
          .catch(error => {
            console.error('Fetch error:', error);
            alert('Failed to upload image.');
          });
      } catch (error) {
        console.error('Failed to store image in sessionStorage:', error);
        alert('Failed to store image. Session storage quota exceeded.');
      }
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please select an image to upload.');
  }
}

function displayImages(images) {
  // Display images in the UI as needed
  // ...
}
