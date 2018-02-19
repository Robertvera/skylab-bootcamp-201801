'use strict';

class SimpleApp extends React.Component {
    constructor() {
        super()

        this.state = {
            input: 0
        }
    }

    keepInput = e => this.setState({ input: e.target.value })

    Plus = props=> this.setState({input: input + 1})
    
    minusOne = input => {
        this.setState(prevState => {
            return {
                input: input - 1
            }
        })
    }
    

    render() {
        return <div>
            <Minus onClickButtonMinus={this.minusOne}/>
        </div>
    }

    
}

function Minus (props)  {
    return <button onClick={(e)=>{
        e.preventDefault()

        props.onClickButtonMinus(props.input)
    }} type="submit" class="round-red-button">-</button>
    return <h1>hola</h1>

}

ReactDOM.render(<SimpleApp />,
    document.getElementById('root'))