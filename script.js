let wins = 0;
$('.win-container').text('Wins: ' + wins);

$('#guy_container').on('click', function() {
  move_guy();
})

function move_guy() {

  counter();
  var left_margin = Math.floor((Math.random() * 1000) + 1);
  $('#guy').css('margin-left', left_margin + 'px');
  $('#guy_container').css('margin-left', left_margin + 'px');

  var top_margin = Math.floor((Math.random() * 1000) + 1);
  $('#guy').css('margin-top', top_margin + 'px');
  $('#guy_container').css('margin-top', top_margin + 'px');
}

function counter() {  $('.win-counter').text('Wins: ' + wins);
  if (wins === 0){
    $('#guy').css('width', '150px');
    wins = wins + 1;
  } else if (wins === 1) {
    $('#guy').css('width', '120px');
    wins = wins + 1;
  } else if (wins === 2) {
    $('#guy').css('width', '90px');
    wins = wins + 1;
  } else if (wins === 3) {
    $('#guy').css('width', '60px');
    wins = wins + 1;
  }else if (wins === 4) {
    $('#guy').css('width', '30px');
    wins = wins + 1;
  } else return;
}
