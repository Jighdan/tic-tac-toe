const state = {
	board: [
		{ index: 0, content: null },
		{ index: 1, content: null },
		{ index: 2, content: null },
		{ index: 3, content: null },
		{ index: 4, content: null },
		{ index: 5, content: null },
		{ index: 6, content: null },
		{ index: 7, content: null },
		{ index: 8, content: null },
	],
	isPlayerFirstTurn: true,
	score: {
		playerFirst: 0,
		playerSecond: 0,
		draws: 0,
	},
	icon: {
		// Unicode Icons, for more reference, read:
		// https://www.w3schools.com/charsets/ref_utf_dingbats.asp
		playerFirst: "&#10007;",
		playerSecond: "&#10061;",
	},
};

export default state;
