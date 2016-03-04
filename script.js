$(document).ready(function() {
  var ticTacToe = new Game($('table'));
  ticTacToe.initCells();
});

function Game(element) {
  game = this;
  game.status = 1;
  game.moves = []; // use to find a winner
  game.initCells = function() {
    for(var i = 0; i < $('td').length; i++) {
      if(i % 2 === 0) {
        $('td').eq(i).addClass('orange');
      } else {
        $('td').eq(i).addClass('blue');
      }
      $('td').eq(i).click(function() {
        game.handleClick($(this));
      });
      $('td').eq(i).prop('id', 'cell' + i);
    }
  };
  game.handleClick = function(cell) {
    if(game.status === 1) {
      cell.html('X');
      //game.moves.push('X');
      game.status = 0;
    } else {
      cell.html('O');
      //game.moves.push('o');
      game.status = 1;
    }
  };
  $('h2').click(function() {
    game.status = 1;
    $('td').html('');
  })
};
