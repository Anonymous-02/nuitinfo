window.onload = function () {
  var wheelDirection = function (evt) {
    if (!evt) evt = event;
    return evt.detail < 0 ? 1 : evt.wheelDelta > 0 ? 1 : -1;
  };
  var test = document.getElementById("test");
  var results = document.getElementById("results");
  function showResults(evt) {
    console.log("scroll");
    var direction = wheelDirection(evt);
    if (direction > 0) {
      if (document.URL.includes("paralleles.html"))
        location.href = document.URL.replace("paralleles.html", "index.html");
      if (document.URL.includes("ocean.html"))
        location.href = document.URL.replace("ocean.html", "paralleles.html");
    } else {
      if (document.URL.includes("paralleles.html"))
        location.href = document.URL.replace("paralleles.html", "ocean.html");
      else if (document.URL.includes("index.html"))
        location.href = document.URL.replace("index.html", "paralleles.html");
      else location.href = document.URL + "paralleles.html";
    }
  }
  if (test.addEventListener) {
    test.addEventListener("mousewheel", showResults, false); // Chrome/Safari/Opera
    test.addEventListener("DOMMouseScroll", showResults, false); // Firefox
  } else if (test.attachEvent) {
    test.attachEvent("onmousewheel", showResults); // IE
  }
};
