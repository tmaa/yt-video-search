import React from "react";

class SearchBar extends React.Component{
  state = {term: ""};

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
  }

  render(){
    return(
      <div className="search-bar ui clearing segment">
        <form className="ui form" onSubmit={this.onFormSubmit} autoComplete="off">
          <div className="field">
            <label>Video Search</label>
            <input type="text" onChange={this.onInputChange} value={this.state.term}/>
          </div>
          <button className="ui right floated small button" type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export {SearchBar};