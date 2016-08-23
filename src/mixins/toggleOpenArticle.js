export default {
	getInitialState() {
		return {
			openArticleId: null
		}
	},

	
	
	
    toggleOpenArticle(id) {
    	return (ev) => {
    		if (ev) ev.preventDefault();

	    	this.setState({
	            openArticleId: this.state.openArticleId === id ? null : id
	        })
    	}
    }
    
}