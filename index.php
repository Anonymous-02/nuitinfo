<?php
echo ('
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>╠╬═╦╩</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="index.js"></script>
  </head>
  <body>
    <img src="images/corps.jpeg" id="myImgId" />
    <p>X:<span id="x"></span></p>
    <p>Y:<span id="y"></span></p>
    <script type="text/javascript">
      let myImg = document.getElementById("myImgId");
      myImg.onmousedown = GetCoordinates;
    </script>
  </body>
</html>');
