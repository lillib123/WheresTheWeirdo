

var guy = document.getElementById("guy");
var guy_container = document.getElementById("guy_container");
guy.style.width = "300px";
var wins = 0;

move_guy();

function move_guy() {

  counter();
  var left_margin = Math.floor((Math.random() * 1000) + 1);
  guy.style.marginLeft = left_margin + "px";
  guy_container.style.marginLeft = left_margin + "px";

  var top_margin = Math.floor((Math.random() * 1000) + 1);
  guy.style.marginTop = top_margin + "px";
  guy_container.style.marginTop = top_margin + "px";
}

function counter() {
  if (wins === 0){
    guy.style.width = "150px";
    wins = wins + 1;
  } else if (wins === 1) {
    guy.style.width = "100px";
    wins = wins + 1;
  } else if (wins === 2) {
    guy.style.width = "75px";
    wins = wins + 1;
  } else if (wins === 3) {
    guy.style.width = "50px";
    wins = wins + 1;
  }else if (wins === 4) {
    guy.style.width = "25px";
    wins = wins + 1;
  } else return;
}
