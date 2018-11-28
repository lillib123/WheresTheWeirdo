let wins = 0;

setupBlocks(1000);

$('#guy_container').on('click', function() {
  move_guy();
})

// function definitions
function setupBlocks(numberOfBlocks) {
  for (let i=1; i<=numberOfBlocks; i++) {
    $('body').append('<div class = "d"></div>');
  }
}

function move_guy() {
  counter();
  let left_margin = Math.floor((Math.random() * 1000) + 1);
  $('#guy').css('margin-left', left_margin + 'px');
  $('#guy_container').css('margin-left', left_margin + 'px');

  let top_margin = Math.floor((Math.random() * 1000) + 1);
  $('#guy').css('margin-top', top_margin + 'px');
  $('#guy_container').css('margin-top', top_margin + 'px');
}

function counter() {
  if (wins < 10) {
    wins++;
    $('.win-container').text('Wins: ' + wins);
  } else {
    $('.win-container').text('YOU WIN!');
  }
}
