import React from 'react';
import './App.css';
import SearchForm from "./SearchForm";
import SearchList from "./SearchList";

class App extends React.Component {

    constructor() {
        super();

        this.state = {

            searchTerm: '',
            jokes: [],
            isFetchingJokes: false,
            isSearchComplete: false
        };

        this.searchJokes = this.searchJokes.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    searchJokes(limit = 20) {
        this.setState({
            isFetchingJokes: true,
            isSearchComplete: false
        });
        fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
            .then(response => response.json())
            .then(json => {
                const jokes = json.results;
                this.setState({
                    jokes,
                    isFetchingJokes: false,
                    isSearchComplete: true
                });
            });
    }

    onSearchChange(value) {
        this.setState({searchTerm: value});
    }


    renderJokes() {
        return (
            <SearchList
                list={this.state.jokes}
                searchComplete={this.state.isSearchComplete}
            />
        );
    }

    render() {

        return (
            <div className="App">
                <img alt="dad joke logo" className="logo" src="/google-dad-jokes-logo.png"/>
                <SearchForm
                    onFormSubmit={this.searchJokes}
                    onSearchValueChange={this.onSearchChange}
                    isSearching={this.state.isFetchingJokes}
                    clearResults={()=> this.setState({jokes: [],isSearchComplete: false})}
                    clearSearchTerm={()=> this.setState({searchTerm: ''})}
                    onSingleSearchClick={()=> this.searchJokes(1)}
                    term={this.state.searchTerm}
                />

                {this.state.isFetchingJokes ? 'Loading joke... ' : this.renderJokes()}
            </div>
        );
    }
}

export default App;
