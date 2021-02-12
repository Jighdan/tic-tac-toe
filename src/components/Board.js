import ComponentBase from "./ComponentBase";
import store from "../store/index";
import Square from "./Square";

export default class Board extends ComponentBase {
	constructor() {
		super({ store, element: document.getElementById("board") });
	};

	render() {
		this.element.innerHTML = "";

		const boardContent = store.state.board.map(square => new Square(square).render());
		this.element.append(...boardContent);

		return this.element;
	};
};