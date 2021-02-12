import store from "../store/index";

export default class UnicodeIcon {
	constructor({ name, size, classes }) {
		this.icon = name !== undefined ? store.state.icon[name] : "";
		this.element = document.createElement("span");

		this.element.innerHTML = this.icon;

		if (size) {
			this.element.classList.add(`icon-${size}`);
		};
		
		if (classes) {
			this.element.classList.add(classes.join(" "));
		};
	};

	render() {
		return this.element;
	};
};