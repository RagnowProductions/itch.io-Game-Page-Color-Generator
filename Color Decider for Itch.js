function generate() {
var Count;
var Color;

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}


Count = 1;
Color = colourRandom();
while (Count <= 1) {
  window.alert(color);
  document.getElementById("block").style.color = color;
  Count = Count + 1;
}
}
