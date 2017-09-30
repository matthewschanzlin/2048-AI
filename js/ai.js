var bool = true;
var bestScore = 20;
var bestMove = 0;

function AI_getBest(grid, debug) {
  
  if (bool) {
    bool = false;
    bestMove = 1;
  } else {
    bool = true;
    bestMove = 2;
  }

	return {move: bestMove, score: bestScore};
}
