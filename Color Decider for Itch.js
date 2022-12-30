function generate() {
var Color;

function colourRandom() {
  var num = Math.floor(Math.random() * Math.pow(2, 24));
  return '#' + ('00000' + num.toString(16)).substr(-6);
}


Color = colourRandom();

window.alert(Color);
const ucodeblock = document.getElementById("block");
ucodeblock.style.color = Color;
var copyBobBtn = document.getElementById('.js-copy-bob-btn'),

copyBobBtn.addEventListener('click', function(event) {
  copyTextToClipboard(Color);
});

}
