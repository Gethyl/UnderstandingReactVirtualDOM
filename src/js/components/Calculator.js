import React from "react"
import ReactDOM from "react-dom"

let IntegerArray = []

export default class Calculator extends React.Component{
	constructor(props) {
		super(props);
		this.state = {output: ""};
	}

	render(){
		let IntegerA,IntegerB,IntegerC;
		

		return(
			<div className="container">						
				<h2>using React</h2>
				<div>Input 1: 
					<input type="text" placeholder="Input 1" ref="input1"></input>
				</div>
				<div>Input 2 :
					<input type="text" placeholder="Input 2" ref="input2"></input>
				</div>
				<div>
					<button id="add" onClick={ () => {
						IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
						IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
						IntegerC = IntegerA+IntegerB
						// this.state.output = IntegerC
						this.setState({output:IntegerC})
						IntegerArray.push(IntegerC)
					  }
					}>Add</button>
					
					<button id="subtract" onClick={ () => {
						IntegerA = parseInt(ReactDOM.findDOMNode(this.refs.input1).value)
						IntegerB = parseInt(ReactDOM.findDOMNode(this.refs.input2).value)
						IntegerC = IntegerA-IntegerB
						//  this.state.output = IntegerC
						this.setState({output:IntegerC})
						IntegerArray.push(IntegerC)

					  }
					}>Subtract</button>
				</div>
				<div>
					<hr/>
					<h2>Output: {this.state.output}</h2>
				</div>
				
			</div>
		);
	}
}

				// <ul>
				// 	{IntegerArray.map((item,i)=>{return <li key={i}>{item}</li>})}
				// </ul>
				
				// <hr/>
