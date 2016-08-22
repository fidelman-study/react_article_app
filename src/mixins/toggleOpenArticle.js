export default {
	getInitialState() {
		return {
			openArticleId: null
		}
	},
	//Это просто литеральная нотация объекта, сдесь нельзя писать toggleOpenArticle = ..., надо toggleOpenArticle: ...
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
