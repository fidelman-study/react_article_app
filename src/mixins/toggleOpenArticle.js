export default {
	getInitialState() {
		return {
			openArticleId: null
		}
	},

	toggleOpenArticle = id => ev => {
        if (ev) ev.preventDefault();

    	this.setState({
            openArticleId: this.state.openArticleId === id ? null : id
        })
	        
    }
	
	/*
    toggleOpenArticle(id) {
    	return function(ev) {
    		if (ev) ev.preventDefault();

	    	this.setState({
	            openArticleId: this.state.openArticleId === id ? null : id
	        })
    	}
    }
    */
}