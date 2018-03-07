import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDelete: false,
            openEdit: false,
            listFlag: true
        }

    }

    render() {
        return (
            <div className="row mt-2 justify-content-center" id="list">

                {(this.state.listFlag) ?
                    this.props.listOfUsers.map((user) =>
                        <div key={user.id} className="card col-lg-2 m-2">
                            <div className="card-body">
                                <h5 className="card-title">{user.name} {user.surname}</h5>
                                <a href="#" className="card-link">Edit ✏️</a>
                                <a href="#" className="card-link">Delete ❌</a>
                            </div>
                        </div>
                    )
                    :
                    undefined
                }

            </div>
        )
    }
}


export default List