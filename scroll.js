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
if (test.addEventListener) {
  test.addEventListener("mousewheel", showResults, false); // Chrome/Safari/Opera
  test.addEventListener("DOMMouseScroll", showResults, false); // Firefox
}
