function generateImage() {
  const query = document.querySelector('.searchInput').value;
  const clientId = 'tiPGSSsgw9JBOq3x-dxdjpUKpApceJ7xqjHcua9bGGY'; // Replace with your Unsplash API key
  const url = `https://api.unsplash.com/photos/random?query=${query}&count=4&client_id=${clientId}`;
  const images = document.querySelectorAll('.image-gallery img');
  
  // Show loading state
  images.forEach(img => {
  img.src = './images/loader.gif';
  img.alt = 'Loading...';
  });
  
  // Fetch images from API
  fetch(url)
  .then(response => response.json())
  .then(data => {
  data.forEach((item, index) => {
  const imageUrl = item.urls.regular;
  
  // Update image display
  images[index].src = imageUrl;
  images[index].alt = item.alt_description;
  
  // Create a download button
  const downloadBtn = document.createElement('button');
  downloadBtn.classList.add('download-btn');
  downloadBtn.textContent = 'Download';
  downloadBtn.onclick = () => downloadImage(imageUrl, `image-${index + 1}.jpg`);
  
  // Add the download button to the image card
  const imgCard = images[index].parentElement;
  const existingBtn = imgCard.querySelector('.download-btn');
  if (existingBtn) {
  existingBtn.remove();
  }
  imgCard.appendChild(downloadBtn);
  });
  })
  .catch(error => {
  console.error('Error fetching images:', error);
  images.forEach(img => {
  img.src = './images/error-placeholder.jpg';
  img.alt = 'Error loading image';
  });
  });
  }
  
  // Function to download image
  function downloadImage(url, filename) {
  fetch(url)
  .then(response => response.blob())
  .then(blob => {
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  
  // Cleanup after download
  URL.revokeObjectURL(link.href);
  })
  .catch(error => console.error('Error downloading image:', error));
  }
  
  // Add this in your script.js file

document.addEventListener('DOMContentLoaded', () => {
  const guideSteps = document.querySelectorAll('.step');

  const options = {
      root: null,
      threshold: 0.1, // Trigger animation when 10% of the element is in view
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
          }
      });
  }, options);

  guideSteps.forEach(step => {
      observer.observe(step);
  });
});




