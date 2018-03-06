import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

function List() {
    return <div className="row justify-content-between mt-4">

        <div className="card col-lg-2 m-2">
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <a href="#" className="card-link">Edit ✏️</a>
                <a href="#" className="card-link">Delete ❌</a>
            </div>
        </div>
        
    </div>


}

export default List