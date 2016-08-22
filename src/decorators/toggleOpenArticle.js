import React from 'react';
//Декораторы создают для переиспользования кода. Их следует делать максимеально универсальными, не привязывайся к названиям сущностей типа Article
export default (Component) => {
	return class toggleOpenArticleDecorator extends React.Component {

		state = {
	        openArticleId: null
	    }



		toggleOpenArticle = id => ev => {
	        if (ev) ev.preventDefault();

	    	this.setState({
	            openArticleId: this.state.openArticleId === id ? null : id
	        })
		        
	    }


		render() {
			return <Component {...this.props} openArticleId = {this.state.openArticleId} toggleOpenArticle = {this.toggleOpenArticle} />
		}
	}
}
