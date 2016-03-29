$(document).ready(function() {
	game = new Game("0000000000000000")

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
	})

	updateGrid = function(game){
		var rows = $('#game-container').children()
		for (var i = 0; i < rows.length; i ++){
			
		}
	}


});
