document.addEventListener("imgLoaded", function (e) {
    img = document.getElementById("img")
    window.setTimeout(function() {
        completion(img.url);
  }, 1000);
})