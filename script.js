<script>
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateBalue = circle.style.transform;
var rotateSum;

upBtn.onclick =function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
}
downBtn.onclick =function(){
    rotateSum = rotateValue + "rotate(+90deg)";
    circle.style.transform = rotateSum;
}
</script>