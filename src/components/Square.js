import ComponentBase from "./ComponentBase";
import store from "../store/index";

export default class Square extends ComponentBase {
	constructor({ index, content }) {
		super({ store, element: document.createElement("div") });
		this.index = index;
		this.content = content;
		this.hasRendered = false;

		// Specific cell classes are required to properly style the grid
		this.element.classList.add("board-square", `board-square-${this.index}`);
	};

	addEvents() {
		this.element.addEventListener("click", () => {
			store.dispatch("runTurn", { squareIndex: this.index })
		});
	};

	render() {
		if (!this.hasRendered) {
			this.addEvents();
		};

		if (this.content !== null) {
			this.element.innerHTML = this.content;
		};

		this.hasRendered = true;
		return this.element;
	};
};