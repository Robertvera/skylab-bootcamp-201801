import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

function Tabs() {
    return <div>

        <h1 className="m-5 text-center">USERS MANAGEMENT APP</h1>
        <ul className="nav nav-tabs m-5">
            <li className="nav-item">
                <NavLink className="nav-link active" to="/">List Users</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register new users</NavLink>
            </li>
        </ul>
    </div>
}

export default Tabs