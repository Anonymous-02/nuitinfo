document.getElementById("main");

var timer = null;

main.addEventListener("mousedown", function(evt){
  timer = setInterval(function(){
    console.log("Mouse is down!");
  }, 50);
});

function mouseDone(evt){
  clearInterval(timer);
  console.log("Mouse is up or outside of box!");
}

main.addEventListener("mouseup", mouseDone);
main.addEventListener("mouseleave", mouseDone);