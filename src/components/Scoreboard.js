import ComponentBase from "./ComponentBase";
import store from "../store/index";

export default class Scoreboard extends ComponentBase {
	constructor() {
		super({ store });
		this.playerFirstScore = document.getElementById("playerFirstScore");
		this.playerSecondScore = document.getElementById("playerSecondScore");
		this.drawsScore = document.getElementById("drawsScore");
	}

	render() {
		this.playerFirstScore.innerText = `${store.state.score.playerFirst} Wins`;
		this.playerSecondScore.innerText = `${store.state.score.playerSecond} Wins`;
		this.drawsScore.innerText = `${store.state.score.draws} Draws`;
	}
}
