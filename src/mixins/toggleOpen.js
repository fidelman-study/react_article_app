export default {
	getInitialState() {
		return {
			isOpen: false
		}
	},


	toggleOpen(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        });
        if (ev) ev.preventDefault();
    },

    openItem(ev) {
    	if (ev) ev.preventDefault();
    	this.setState({
    		isOpen: true
    	});
    }
}