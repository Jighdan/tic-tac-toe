import ComponentBase from "./ComponentBase";
import store from "../store/index";
import Square from "./Square";
import state from "../store/state";

export default class Board extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("board") });
	};

	render() {
		this.element.innerHTML = "";

		const boardContent = state.board.map(square => new Square(square).render());
		this.element.append(...boardContent);

		return this.element;
	};
};