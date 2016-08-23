import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css';

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    handleChange = (selected) => {
        this.setState({
            selected
        })
    }
}

export default Container