import React from "react";
import './SearchForm.css';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            limit: 20,
            value: 'Enter search term...'
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onClearResults = this.onClearResults.bind(this);
        this.onClearSearchTerm = this.onClearSearchTerm.bind(this);

    }


    onSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state.limit);

    }
    onClearResults(event) {
        event.preventDefault();
        this.props.clearResults();

    }
    onClearSearchTerm(event) {
        event.preventDefault();
        this.props.clearSearchTerm();

    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Enter search term..." value={this.props.term}
                       onChange={event => this.props.onSearchValueChange(event.target.value)}/>
                <select name="Joke Limit" id="limit" onChange={event => this.setState({limit:event.target.value})}
                        value={this.state.limit}>
                    {Array(20).fill(0).map((value, index) => {

                        return <option key={index + 1} value={index + 1}>{index + 1}</option>
                    })}
                </select>
                {/*
        TODO 5. BONUS: update search input so results update as you type.
        */}
                <button disabled={this.props.isSearching}>Search</button>
                <button onClick={this.props.onSingleSearchClick} disabled={this.props.isSearching}>I'm feeling funny
                </button>
                <br/><br/>
                <button onClick={this.onClearResults}> Clear Results</button>
                <button onClick={this.onClearSearchTerm}> Clear Search Term</button>
            </form>
        );

    }

}


export default SearchForm;