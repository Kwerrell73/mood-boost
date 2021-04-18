
var natureBtn = document.getElementById('natureBtn');

window.addEventListener('fetch', function (event) {
  console.log("fetch add event listener");
});

natureBtn.addEventListener('click', function (event) {
  fetch('https://api.giphy.com/v1/gifs/search?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&q=')
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data[0]);
      // Create a variable that will select the <div> where the GIF will be displayed
      var responseContainerEl = document.querySelector('#response-container');

      // Empty out the <div> before we append a GIF to it
      responseContainerEl.innerHTML = "";

      //
      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0]);
      // Append 'gifImg' to the <div>
      responseContainerEl.appendChild(gifImg);

      //
    });

  });

  