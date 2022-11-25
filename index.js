var gameBoard = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
  ]
  
  const print_board = () => {
    console.log(gameBoard[0][0] + ' ¦ ' + gameBoard[0][1] + ' ¦ ' + gameBoard[0][2]);
    console.log('---------');
    console.log(gameBoard[1][0] + ' ¦ ' + gameBoard[1][1] + ' ¦ ' + gameBoard[1][2]);
    console.log('---------');
    console.log(gameBoard[2][0] + ' ¦ ' + gameBoard[2][1] + ' ¦ ' + gameBoard[2][2]);
    console.log(' ');
  }
  
  const check_win = (symbol) => {
    if(gameBoard[0][0] === symbol && gameBoard[0][1] === symbol && gameBoard[0][2] === symbol){
      return true;
    }else if(gameBoard[1][0] === symbol && gameBoard[1][1] === symbol && gameBoard[1][2] === symbol) {
      return true;
    }else if(gameBoard[2][0] === symbol && gameBoard[2][1] === symbol && gameBoard[2][2] === symbol) {
      return true;
    }else if(gameBoard[0][0] === symbol && gameBoard[1][0] === symbol && gameBoard[2][0] === symbol) {
      return true;
    }else if(gameBoard[0][1] === symbol && gameBoard[1][1] === symbol && gameBoard[2][1] === symbol) {
      return true;
    }else if(gameBoard[0][2] === symbol && gameBoard[1][2] === symbol && gameBoard[2][2] === symbol) {
      return true;
    }else if(gameBoard[0][0] === symbol && gameBoard[1][1] === symbol && gameBoard[2][2] === symbol) {
      return true;
    }else if(gameBoard[0][2] === symbol && gameBoard[1][1] === symbol && gameBoard[2][0] === symbol) {
      return true;
    }else return false;
  }
  
  const game = () =>{
    let won = false;
    let turn = 1;
    while(won === false) {
      const row = prompt('Select row: ');
      const col = prompt('Select column: ');
      if(turn === 1) {
        gameBoard[row][col] = 'o';
        print_board();
        won = check_win('o');
        turn = (turn + 1) % 2;
      }else if(turn === 0) {
        gameBoard[row][col] = 'x';
        print_board();
        won = check_win('x');
        turn = (turn + 1) % 2;
      }
    }

    if(turn === 0){
      console.log('o wins');
    }else {
      console.log('x wins')
    }
  }
  
  game();
