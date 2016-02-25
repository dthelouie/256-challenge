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

Game.prototype.spawn = function(){
  //danger
  var row = Math.ceil(Math.random() * 4) - 1;
  var item = Math.ceil(Math.random() * 4) - 1;
  var random = Math.random();
  var rand_num;
  if (random < 0.8){
    rand_num = 2;
  } else {
    rand_num = 4;
  }
  if (this.board[row][item] == 0){
    this.board[row][item] = rand_num;
  } else if (this.movable == true){
    return true
  } else if (this.movable == false){
    this.movable
  } else {
    this.spawn();
  }
}

Game.prototype.left = function(){
  this.move();
}

Game.prototype.right = function(){
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse();
  }
  this.move();
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse();
  }//maybe WET wrapper for revers?
}

Game.prototype.up = function(){
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse()
  }
  this.board = _.zip(this.board[0], this.board[1], this.board[2], this.board[3])
  this.left();//change to move for readablity
  this.board = _.zip(this.board[0], this.board[1], this.board[2], this.board[3])
  this.output();//?
  for (var i=0; i<this.board.length; i++){
    this.board[i].reverse()
  }
}

Game.prototype.down = function(){
  this.board = _.zip(this.board[0], this.board[1], this.board[2], this.board[3])
  this.right();
  this.board = _.zip(this.board[0], this.board[1], this.board[2], this.board[3])
}

Game.prototype.move = function(){
  for (var i = 0; i < 4; i++){
    var new_row = _.compact(this.board[i])
    // var new_row = this.board[i].map(function(num){
    //   if (num != 0){
    //     return num;
    //   }
    // })
    for (var j = 0; j < new_row.length; j++){
      if (new_row[j] == new_row[j+1]){
        new_row[j] = new_row[j] + new_row[j+1]
        new_row[j+1] = 0//remove it? or jump it?// look into splice
      }
      new_row = _.compact(new_row)//WET
    }
    while (new_row.length < 4){
      new_row.push(0);
    }
    this.board[i] = new_row;
  }
  this.spawn();
  this.movable()
}// :/

Game.prototype.output = function(){
  for (var i = 0; i < this.board.length; i++){
    console.log(this.board[i].join(''));
  }
}

Game.prototype.movable = function(){
  for (var n = 0; n < this.board.length; n++) {
    if (_.find(this.board[n], function(num){ return num == 0})){
      return true;
    } else {
      for (var x = 1; x < 4; x ++){
        if (this.board[n][x] == this.board[n][x-1]){
          return true;
        }
      }
    }
  };
  console.log('game over!')
  return false;
}


// game = new Game('2000200000000000');


// game.output();
// game.up();
