$(document).ready(function() {
  var ticTacToe = new Game($('table'));
  ticTacToe.initCells();
});
function Game(element) {
  game = this;
  game.element = element;
  game.status = 1;
  game.moves = []; // use to find a winner
  game.initCells = function() {
    for(var i = 0; i < $('td').length; i++) {
      $('td').eq(i).click(function() {
        game.handleClick($(this));
      });
      $('td').eq(i).mouseenter(function() {
        game.blinkEffect($(this));
      });
      $('td').eq(i).mouseout(function() {
        game.killEffect($(this));
      });
      $('table').eq(i).mouseenter(function() {
        game.blinkEffect($('.cells'));
      });
      $('table').eq(i).mouseout(function() {
        game.killEffect($('.cells'));
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
  game.blinkEffect = function(cell) {
    cell.css('opacity', '1');
  };
  game.killEffect = function(cell) {
    cell.css('opacity', '.2');
  };
  game.tableO = function(cell) {
    cell.addClass('full-o');
  };
  $('h2').click(function() {
    game.status = 1;
    $('td').html('');
  })
}

//give a cell full border and its opacity increase and decrease (blinking effect) when the mouse enters it
  //add event listener to each cell that triggers event when mouse enters
  //make cell's border style --> 1px solid black
  //callback for event listener makes opacity increase and decrease
    //use setInterval() to increase / decrease opacity after about .3s to
      //if opacity is < 1, make opacity 1
      //if opaicty === 1, make opaicty .2
