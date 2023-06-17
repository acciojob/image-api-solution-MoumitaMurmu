const processImage = () => {
  const file = document.getElementById('imageInput').files[0];
  const url = 'https://api.imagga.com/v2/colors';

  const formData = new FormData();
  formData.append('image', file);

  fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      'Authorization': 'Basic ' + btoa('api_key:api_secret')
    }
  })
    .then(response => response.json())
    .then(data => {
      const originalImage = document.getElementById('originalImage');
      const processedImage = document.getElementById('processedImage');

      originalImage.src = URL.createObjectURL(file);
      processedImage.src = data.result.colors.image_colors[0].closest_palette_color_html;
    })
    .catch(error => console.error(error));
};
