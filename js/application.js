$(document).ready(function() {
	game = new Game("0000000000000000")

	updateGrid = function(game){
		var row = $('#game-container').children().first()
		for (var rowIndex = 0; rowIndex < row.parent().children().length; rowIndex++){
		var cell = row.children().first()
			for (var cellIndex = 0; cellIndex < row.children().length; cellIndex++){
				if (game.board[rowIndex][cellIndex] == 0){
					cell.html("")
				} else {
					cell.html(game.board[rowIndex][cellIndex].toString())
				}
				cell = cell.next()
			}
			row = row.next()
		}
	}

	updateGrid(game)

	$(document).keyup(function(e){
		e.preventDefault();
		if (e.which == 37) {
			game.left()
		} else if (e.which == 38) {
			game.up()
		} else if (e.which == 39) {
			game.right()
		} else if (e.which == 40) {
			game.down()
		}
		updateGrid(game);
	})



});
