  

var natureBtn = document.getElementById('natureBtn');

window.addEventListener('fetch', function (event) {
  console.log("fetch add event listener");
});

natureBtn.addEventListener('click', function (event) {
  fetch(
    'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&rating=g&tag=nature'
  )
    // Convert the response to JSON
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      // Use 'querySelector' to get the ID of where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');
      // Create an '<img>' element
      var gifImg = document.createElement('img');
      // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
      gifImg.setAttribute('src', response.data.image_url);
      // Append the '<img>' element to the page
      responseContainerEl.appendChild(gifImg);
    });
  

  });