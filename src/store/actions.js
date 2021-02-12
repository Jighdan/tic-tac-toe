export default {
	runTurn(context, { squareIndex }) {
		// If clickedSquare IS NONE
		if (context.state.board[squareIndex].content === null) {
			// SET clickedSquare.content AS currentTurn
			const playerData = context.getter("currentTurnPlayerData");
			context.commit("updateSquareContent", { index: squareIndex, newContent: playerData.icon });

			// IF winningCondition IS TRUE
			if (context.getter("hasWinningConditionMet")) {
				// ADD score TO currentTurn
				context.commit("updateScore", { scorer: playerData.name });
				// RESET board
				context.commit("clearBoard");
			};

			// IF board DOESN'T CONTAIN NONE
			if (context.getter("isBoardFull")) {
				// ADD score TO draw
				context.commit("updateScore", { scorer: "draw" });
				// RESET board
				context.commit("clearBoard");
			};

			// TOGGLE currentTurn
			context.commit("toggleTurn");
		};
	}
};