var bool = true;
var bestScore = 20;
var bestMove;

function canMoveUp(grid, val) {
  for (var i = 0; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      if (grid.cells[i][j]) {
        val = (grid.cells[i][j] && !grid.cells[i][j - 1]) ||
               (grid.cells[i][j].value == grid.cells[i][j - 1].value);
        if (val) {
          break;
        }
      }
    }
    if (val) {
      break;
    }
  }
  return val;
}

function canMoveRight(grid, val) {
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
      if (grid.cells[i][j]) {
        val = (grid.cells[i][j] && !grid.cells[i + 1][j]) ||
               (grid.cells[i][j].value == grid.cells[i + 1][j].value);
        if (val) {
          break;
        }
      }
    }
    if (val) {
      break;
    }
  }
  return val;
}

function canMoveDown(grid, val) {
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 3; j++) {
      if (grid.cells[i][j]) {
        val = (grid.cells[i][j] && !grid.cells[i][j + 1]) ||
               (grid.cells[i][j].value == grid.cells[i][j + 1].value);
        if (val) {
          break;
        }
      }
    }
    if (val) {
      break;
    }
  }
  return val;
}

function canMoveLeft(grid, val) {
  for (var i = 1; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (grid.cells[i][j]) {
        val = (grid.cells[i][j] && !grid.cells[i - 1][j]) ||
               (grid.cells[i][j].value == grid.cells[i - 1][j].value);
        if (val) {
          break;
        }
      }
    }
    if (val) {
      break;
    }
  }
  return val;
}

function getFutureGrid(move, grid) {
  var tempGrid = [];
  for (var i = 0; i < 4; i++) {
    for ( var j = 0; j < 4; j++) {
      if (grid.cells[i][j]) {
        tempGrid[i][j] = grid.cells[i][j].value;
      }
      else {
        tempGrid[i][j] = 0;
      }
    }
  }
  var moveGrid = moveGrid(tempGrid, move);
  return moveGrid;
}

function moveGrid(gridAsArr, move) {
  switch (move) {
    case 0:
      // up
      return moveUp(gridAsArr);
    case 1:
      // right
      return moveRight(gridAsArr);
    case 2:
      // down
      return moveDown(gridAsArr);
    case 3:
      // left
      return moveLeft(gridAsArr);
    default:
      alert("BAD");
  }
}

function moveUp(gridAsArr) {
  //move up
}

function moveRight(gridAsArr) {
  //move right
}

function moveDown(gridAsArr) {
  //move down
}

function moveLeft(gridAsArr) {
  //move left
}

function getMoves(grid) {
  var up = false;
  var right = false;
  var down = false;
  var left = false;

  up = canMoveUp(grid, up);
  right = canMoveRight(grid, right);
  down = canMoveDown(grid, down);
  left = canMoveLeft(grid, left);

  return [up, right, down, left];
}
var twotime = false;

function AI_getBest(grid, debug) {

  var moves = getMoves(grid);

  switch (true) {
    case moves[3]:
      if (twotime) {
        bestMove = 3;
        twotime = false;
      } else {
        if (grid.cells[0][0] && grid.cells[0][1] && grid.cells[0][2] && grid.cells[0][3]) {
          bestMove = 0;
          twoTime = false;
        }
        bestMove = 3;
        twotime = true;
      }
      //getFutureGrid(3, grid);
      break;
    case moves[2]:
      bestMove = 2;
      //getFutureGrid(2, grid);
      break;
    case moves[0]:
      bestMove = 0;
      //getFutureGrid(0, grid);
      break
    case moves[1]:
      bestMove = 1;
      //getFutureGrid(1, grid);
      break;
    default:
      bestMove = 3;
      break;
  }

	return {move: bestMove, score: bestScore};
}
