import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            query : ''
        }
    }

    keepInput = query => this.setState({query})

    submit = () => {
        this.props.onSubmit(this.state.query)

        this.setState({ query: '' })
    }
    

    render() {
    
        return(<div>
        <form 
            className="row justify-content-center mt-3" 
            onSubmit={e => { e.preventDefault(); this.submit()}}>
                <input 
                    type="search" 
                    className="form-control col-sm-12 col-lg-4 mx-2 mb-2" 
                    placeholder="Enter name, surname, email or username" 
                    onChange={(e) => this.keepInput(e.target.value)} 
                    value={this.state.query}/>
                <button 
                    type="submit" 
                    className="btn btn-primary col-sm-12 col-lg-1 mx-2 mb-2">
                        Search
                </button>
        </form>

    </div>)
    }
}

export default Search