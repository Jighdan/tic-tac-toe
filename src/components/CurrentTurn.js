import ComponentBase from "./ComponentBase";
import store from "../store/index";

export default class CurrentTurn extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("currentTurn") });
	}

	render() {
		const { icon } = store.getter("currentTurnPlayerData");
		this.element.innerHTML = icon;
	}
}
