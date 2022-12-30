function generate() {
var Count;
var Color;

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}


Count = 1;
Color = colourRandom();
while (Count <= mathRandomInt(1, 1)) {
  window.alert(color);
  document.getElementById("block").style.color = color;
  Count = Count + 1;
}
}
