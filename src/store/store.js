import EventObserver from "../library/eventObserver";

export default class Store {
	constructor(state, mutations, actions, getters) {
		this.state = state || {};
		this.mutations = mutations || {};
		this.actions = actions || {};
		this.getters = getters || {};
		this.events = new EventObserver();
	};

	commit(mutationName, payload, notifyEvents = true) {
		if (typeof this.mutations[mutationName] !== "function") {
			console.error(`Mutation "${mutationName}" doesn't exists!`);
			return false;
		};

		// Commit the mutation
		this.mutations[mutationName](this.state, payload);

		// Notify the components that are listening to the event
		if (notifyEvents) {
			this.events.notify("stateChange", this.state);
		};
	};

	dispatch(actionName, payload) {
		if (typeof this.actions[actionName] !== "function") {
			console.error(`Action "${actionName}" doesn't exists!`);
			return false;
		};

		this.actions[actionName](this, payload);
	};

	getter(getterName) {
		if (typeof this.getters[getterName] !== "function") {
			console.error(`Getter "${getterName}" doesn't exists!`);
			return false;
		};

		return this.getters[getterName](this.state);
	}
};
