export default {
	updateSquareContent(state, { index, newContent }) {
		state.board[index].content = newContent;
	},

	toggleTurn(state) {
		state.isPlayerFirstTurn = !state.isPlayerFirstTurn;
	},

	updateScore(state, { scorer }) {
		if (state.score.hasOwnProperty(scorer)) {
			state.score[scorer]++;
		}
	},

	clearBoard(state) {
		state.board.map((square) => (square.content = null));
	},

	clearScore(state) {
		state.score = {
			playerFirst: 0,
			playerSecond: 0,
			draws: 0,
		};
	},
};
