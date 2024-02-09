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

        // ...

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

            const sampleHeader = response.headers.get('X-Sample-Header');
            console.log('X-Sample-Header:', sampleHeader);

            return response.json();
          })
          .then(data => {
            // Use sessionStorage instead of localStorage
            let storedImages = JSON.parse(sessionStorage.getItem('images')) || [];
            storedImages.push(imageUrl);

            const maxStoredImages = 10;
            storedImages = storedImages.slice(-maxStoredImages);

            sessionStorage.setItem('images', JSON.stringify(storedImages));
            displayImages(storedImages);
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
