import React, {Component} from 'react';

export default class SearchBar extends Component{

    constructor(props){
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    render(){
        return (
            <form className="input-group">
                <input placeholder="Enter search city name" value={this.state.term} className="form-control" onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>
        );
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
}
