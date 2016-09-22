// HOC - higher order component
// decorator
import React from 'react';

export default (Component) => {
	return class DecoratedComponent extends React.Component {
		state = {
       isOpen: false
    };

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        if (ev) ev.preventDefault();
        //console.log(this.props.article.id);
    }

		render() {
			return <Component {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
		}
	}
}