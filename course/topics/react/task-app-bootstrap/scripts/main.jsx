'use strict';

class TaskApp extends React.Component {
    constructor() {
        super()

        this.state = {
            // id = getTime(),
            tasks: []
        }
    }

    addTask = task => {
        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, { title: task, done: false }]
            }
        })
    }

    checkTask = 

    removeTask = index => {
        this.setState(prevState => {
            tasks: prevState.tasks.map((task, _index) => {
                if (index === _index) 
                    task.done = true

                    return task
                })
        })
    }

    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="todolist not-done">
                        <h1>Todos</h1>
                        <TaskInput onAddTask={this.addTask} />
                        <button id="checkAll" className="btn btn-success">Mark all as done</button>
                        <hr />
                        <TaskList tasks={this.state.tasks} onRemoveTask={this.removeTask} />
                        <div className="todo-footer">
                            <strong><span className="count-todos" /></strong> Items Left
        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="todolist">
                        <h1>Already Done</h1>
                        <ul id="done-items" className="list-unstyled">
                            <li>Some item <button className="remove-item btn btn-default btn-xs pull-right"><span className="glyphicon glyphicon-remove" /></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    }



}

class TaskInput extends React.Component {
    constructor() {
        super()

        this.state = {
            input: ''
        }
    }

    keepInput = e => this.setState({ input: e.target.value })

    addTask = () => {
        this.props.onAddTask(this.state.input)

        this.setState({ input: '' })
    }

    render() {
        return <form onSubmit={e => {
            e.preventDefault()

            this.addTask()
        }
        }>
            <input type="text" className="form-control add-todo" placeholder="Add todo" onChange={this.keepInput} value={this.state.input} />
        </form>
    }

}

function TaskList(props) {
    return <ul id="sortable" className="list-unstyled">
        {props.tasks.map((task, index) => 
        <li key={index} className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox" defaultValue onChange={e => {
                        e.preventDefault()

                        props.onRemoveTask(index)
                    }} />{task.title}</label>
            </div>
        </li>)}
    </ul>
}


ReactDOM.render(<TaskApp />,
    document.getElementById('root'))