window.onload = function () {
  var wheelDistance = function (evt) {
    if (!evt) evt = event;
    var w = evt.wheelDelta,
      d = evt.detail;
    if (d) {
      if (w) return (w / d / 40) * d > 0 ? 1 : -1; // Opera
      else return -d / 3; // Firefox;         TODO: do not /3 for OS X
    } else return w / 120; // IE/Safari/Chrome TODO: /3 for Chrome OS X
  };
  var wheelDirection = function (evt) {
    if (!evt) evt = event;
    return evt.detail < 0 ? 1 : evt.wheelDelta > 0 ? 1 : -1;
  };
  var test = document.getElementById("test");
  var results = document.getElementById("results");
  function showResults(evt) {
    var direction = wheelDirection(evt);
    if (direction > 0) {
      if (document.URL.includes("paralleles.html"))
        location.href = document.document.URL.replace(
          "paralleles.html",
          "index.html"
        );
      if (document.URL.includes("ocean.html"))
        location.href = document.document.URL.replace(
          "ocean.html",
          "paralleles.html"
        );
    } else {
      if (document.URL.includes("paralleles.html"))
        location.href = document.document.URL.replace(
          "paralleles.html",
          "ocean.html"
        );
      if (document.URL.includes("index.html"))
        location.href = document.document.URL.replace(
          "index.html",
          "paralleles.html"
        );
    }
  }

  if (test.addEventListener) {
    test.addEventListener("mousewheel", showResults, false); // Chrome/Safari/Opera
    test.addEventListener("DOMMouseScroll", showResults, false); // Firefox
  } else if (test.attachEvent) {
    test.attachEvent("onmousewheel", showResults); // IE
  }
};
