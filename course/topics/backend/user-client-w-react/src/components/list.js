import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Modal from 'react-bootstrap4-modal'
import usersApi from '../api/api-client2'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openDelete: false,
            openEdit: false,
            user: {
                id: '',
                name: '',
                surname: '',
                username: ''
            }
        }

    }

    modalClose = () => {
        console.log('modalClose')
        this.setState(
            { openDelete: false }
        )
    }

    setUser = (idU, nameU, surnameU, usernameU) => {
        console.log('setUser')
        this.setState(
            {
                user: {
                    id: idU,
                    name: nameU,
                    surname: surnameU,
                    username: usernameU
                }
            }
        )
    }

    openModal = () => {
        console.log('openModal')
        this.setState(
            {
                openDelete: true
            }
        )
    }

    deleteUserById = () => {
        console.log('delete')
        return usersApi.deleteUser(this.state.user.id,this.state.user.username,this.state.user.password).then(res => console.log(res.data))
    }    

    render() {
        return (
            <div>
                <div className="row mt-2 justify-content-center" id="list">

                    {this.props.listOfUsers.map((user) =>
                        <div key={user.id} className="card col-lg-2 m-2">
                            <div className="card-body">
                                <h5 className="card-title">{user.name} {user.surname}</h5>
                                <a href="" className="card-link">Edit ✏️</a>
                                <a href="#" onClick={e => {
                                    e.preventDefault()
                                    this.openModal()
                                    this.setUser(user.id, user.name, user.surname, user.username)
                                }} className="card-link">Delete ❌</a>
                            </div>
                        </div>
                    )}
                </div>
                <Modal visible={this.state.openDelete} onClickBackdrop={this.modalClose}>
                    <div className="modal-header">
                        <h5 className="modal-title">{this.state.user.name} {this.state.user.surname}</h5>
                    </div>
                    <div className="modal-body">
                        <p>In order to remove this user, please insert user and password:</p>
                        <form>
                            <div className="form-group">
                                <input type="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp" placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />                                
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={this.deleteUserById}>
                            Do it!
                        </button>
                        <button type="button" className="btn btn-danger" onClick={this.modalClose}>
                            I changed my mind
                        </button>
                    </div>
                </Modal>

            </div>
        )
    }
}



export default List