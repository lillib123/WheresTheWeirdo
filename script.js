let wins = 0;
let difficultySelected = false;

// event listeners
$('#guy_container').on('click', function() {
  move_guy();
})
$('.barrier-button').on('click', function() {
  let numberOfBlocks = $('.difficulty-option:checked').val();
  if (!difficultySelected) {
    setupBlocks(numberOfBlocks);
    difficultySelected = true;
  }
  $('.barrier-page').remove();

})
// function definitions
function setupBlocks(numberOfBlocks) {
  for (let i=1; i<=numberOfBlocks; i++) {
    $('body').append('<div class = "d"></div>');
  }
}

function move_guy() {
  counter();
  let leftMargin = Math.floor((Math.random() * 100) + 1);
  $('#guy').css('margin-left', leftMargin + 'wv');
  $('#guy_container').css('margin-left', leftMargin + 'wv');

  let topMargin = Math.floor((Math.random() * 100) + 1);
  $('#guy').css('margin-top', topMargin + 'vh');
  $('#guy_container').css('margin-top', topMargin + 'vh');
}

function counter() {
  if (wins < 10) {
    wins++;
    $('.win-container').text('Wins: ' + wins);
  } else {
    $('.win-container').text('YOU WIN!');
  }
}
