  // Create event Listeners for each button -Kellie W

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

  sportsBtn.addEventListener('click', function (event) {
    fetch(
      'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&rating=g&tag=sports'
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

    animalBtn.addEventListener('click', function (event) {
      fetch(
        'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&rating=g&tag=baby animals'
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

      surpriseBtn.addEventListener('click', function (event) {
        fetch(
          'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&rating=g&tag=laughing'
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

        
//start of js for media player, vmcguire
var media = document.querySelector('video');
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

play.addEventListener('click', playPauseMedia);

function playPauseMedia() {
  
    if(media.paused) {
      play.setAttribute('data-icon','u');
      media.play();
    } else {
      play.setAttribute('data-icon','P');
      media.pause();
    }
  }

stop.addEventListener('click', stopMedia);
media.addEventListener('ended', stopMedia);

function stopMedia() {
    media.pause();
    media.currentTime = 0;
    play.setAttribute('data-icon','P');
  }