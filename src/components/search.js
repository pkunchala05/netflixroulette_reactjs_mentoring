import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.initialQuery || '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.query);
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div className="search-form" >
        <input
          className="form-input"
          type="text"
          placeholder="What do you want to watch..."
          value={this.state.query}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={{ width: '30%' }}
        />
        <button className="form-button" onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;