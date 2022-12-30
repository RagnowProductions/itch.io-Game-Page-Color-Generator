function generate() {
  var Color;

  function colourRandom() {
    var num = Math.floor(Math.random() * Math.pow(2, 24));
    return '#' + ('00000' + num.toString(16)).substr(-6);
  }


  Color = colourRandom();

  const ucodeblock = document.getElementById("block");
  ucodeblock.style.color = Color;
  document.getElementById("hexadecimal-paragraph").innerHTML = Color;

}
