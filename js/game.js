function Game(string){
  var fullArr = string.split("");
  for (var i = 0; i < fullArr.length; i++){
    fullArr[i] = parseInt(fullArr[i]);
  };
  // fullArr.forEach(function(num){
  //   num = parseInt(num)
  // })
  var boardArr = []
  for (var i = 0; i < fullArr.length; i += 4){
    boardArr.push(fullArr.slice(i, i+4));
  }
  this.board = boardArr
}

Game.prototype.left = function(){
  this.move();
  this.output();
}

Game.prototype.right = function(){
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse();
  }
  this.move();
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse();
  }
  this.output();
}

Game.prototype.up = function(){
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse()
  }
  this.down();
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse()
  }
  this.output();
}

Game.prototype.down = function(){
  for (var i=0; i<this.board.length; i++){
    _.zip(this.board[i])
  }
  this.move();
  for (var i=0; i<this.board.length; i++){
    _.zip(this.board[i])
  }
  this.output();
}

Game.prototype.move = function(){
  for (var i = 0; i < 4; i++){
    var new_row = _.compact(this.board[i])
    // var new_row = this.board[i].map(function(num){
    //   if (num != 0){
    //     return num;
    //   }
    // })
    for (var i = 0; i < new_row.length; i++){
      if (new_row[i] == new_row[i+1]){
        new_row[i] = new_row[i] + new_row[i+1]
        new_row[i+1] = 0
      }
      new_row = _.compact(new_row)
    }
    while (new_row.length <= 4){
      new_row.push(0)
    }
    this.board[i] = new_row
  }
}

Game.prototype.output = function(){
  for (var i = 0; i < this.board.length; i++){
    console.log(this.board[i].join(''));
  }
}



game = new Game('2000200000000000');


game.output();
game.up();
