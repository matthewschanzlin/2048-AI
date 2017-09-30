var bool = true;

function AI_getBest(grid, debug) {

  var bestScore = 20;
  var bestMove = 0;

  if (bool) {
    bool = false;
    bestMove = 1;
  } else {
    bool = true;
    bestMove = 2;
  }

	return {move: bestMove, score: bestScore};
}
