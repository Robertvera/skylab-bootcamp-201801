import React, { Component } from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props)
        this.showModal = this.showModal.bind(this);
        this.state = {
            openDelete: false,
            openEdit: false,
            listFlag: true
        }

    }

    showModal() {

        ReactDOM.findDOMNode(this.refs.modal);
    }

    render() {
        return (
            <div className="row mt-4 justify-content-center" id="list">

                {(this.state.listFlag) ?
                    this.props.listOfUsers.map((user) =>
                        <div key={user.id} className="card col-lg-2 m-2">
                            <div className="card-body">
                                <h5 className="card-title">{user.name} {user.surname}</h5>
                                <a href="#" className="card-link">Edit ✏️</a>
                                <a href="#"
                                    onClick={this.showModal}
                                    data-toggle="modal"
                                    data-target="#myModal"
                                    className="card-link">Delete ❌</a>
                            </div>
                        </div>
                    )
                    :
                    undefined
                }

                <Modal
                    title="Modal Header"
                    content="Modal Content"
                    footer="Save"
                    ref="modal"
                />

            </div>
        )
    }
}

const ModalHeader = (props) => (
    <div className="modal-header">
        <button
            type="button"
            className="close"
            data-dismiss="modal">
            &times;
      </button>

        <h4>{props.title}</h4>
    </div>
);

const ModalBody = (props) => (
    <div className="modal-body">
        {props.content}
        <p>Sample taken from: https://www.w3schools.com/bootstrap/bootstrap_modal.asp</p>
    </div>
)


const ModalFooter = (props) => (
    <div className="modal-footer">
        <input
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
            value={props.footer}
        />

        <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal">
            Close
      </button>
    </div>
)

const Modal = (props) => {
    return (
        <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <ModalHeader title={props.title} />
                    <ModalBody content={props.content} />
                    <ModalFooter footer={props.footer} />
                </div>
            </div>
        </div>
    );
}


export default List