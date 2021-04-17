
var natureBtn = document.getElementById('natureBtn');

window.addEventListener('fetch', function (event) {
    console.log("fetch add event listener");
});

btn.addEventListener('click', function (event) {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN&q=')
    .then(data => {console.log(data)})
});

  

