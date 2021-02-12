export default {
	currentTurnPlayerData(state) {
		const playerData = state.isPlayerFirstTurn
			? { name: "playerFirst", icon: state.icon.playerFirst }
			: { name: "playerSecond", icon: state.icon.playerSecond }

		return playerData;
	},

	hasWinningConditionMet(state) {
		const winningConditionsIndexes = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [6, 4, 2]
		];

		const boardWinningConditionsLines = winningConditionsIndexes.map(conditionSet => (
			conditionSet.map(index => state.board[index].content)
		));

		const boardLinesFilled = boardWinningConditionsLines.filter(line => {
			return !line.includes(null) && line.every(item => item === line[0])
		});

		if (boardLinesFilled?.length) {
			return true
		};

		return false;
	},

	isBoardFull(state) {
		return state.board.every(square => square.content !== null);
	}
};