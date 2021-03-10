export default {
	runTurn(context, { squareIndex }) {
		if (context.state.board[squareIndex].content === null) {
			const playerData = context.getter("currentTurnPlayerData");
			context.commit("updateSquareContent", {
				index: squareIndex,
				newContent: playerData.icon,
			});

			if (context.getter("hasWinningConditionMet")) {
				context.commit("updateScore", { scorer: playerData.name });
				setTimeout(context.dispatch("resetBoard"), 1000, null);
			}

			if (context.getter("isBoardFull")) {
				context.commit("updateScore", { scorer: "draws" });
				setTimeout(context.dispatch("resetBoard"), 1000, null);
			}

			context.commit("toggleTurn");
		}
	},

	resetBoard(context) {
		setTimeout(() => context.commit("clearBoard"), 1000, null);
	},
};
