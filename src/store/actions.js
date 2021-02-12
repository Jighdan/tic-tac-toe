export default {
	runTurn(context, { squareIndex }) {
		if (context.state.board[squareIndex].content === null) {
			const playerData = context.getter("currentTurnPlayerData");
			context.commit("updateSquareContent", { index: squareIndex, newContent: playerData.icon });

			if (context.getter("hasWinningConditionMet")) {
				context.commit("updateScore", { scorer: playerData.name });
				context.commit("clearBoard");
			};

			if (context.getter("isBoardFull")) {
				context.commit("updateScore", { scorer: "draw" });
				context.commit("clearBoard");
			};

			context.commit("toggleTurn");
		};
	}
};