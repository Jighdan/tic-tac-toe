import ComponentBase from "./ComponentBase";
import store from "../store/index";

export default class Options extends ComponentBase {
	constructor() {
		super({ store, static: true });
		this.buttonClearBoard = document.getElementById("buttonClearBoard");
		this.buttonClearScore = document.getElementById("buttonClearScore");
	}

	addEvents() {
		this.buttonClearBoard.addEventListener("click", () =>
			store.commit("clearBoard")
		);
		this.buttonClearScore.addEventListener("click", () =>
			store.commit("clearScore")
		);
	}

	render() {
		this.addEvents();
	}
}
