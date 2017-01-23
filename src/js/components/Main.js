import React from "react";
import Calculator from "./Calculator"

export default class Layout extends React.Component{
	constructor(props){
		super(props)
		this.state = {random:0}
	}

	render(){	

		return(
			<div>
			{/*	 <div>
					 <button onClick={()=>{
						 this.setState({random:Math.random()})
					 }}>click to generate random number</button>
					<h2>{this.state.random}</h2>
				 </div>
				 <hr/>
			*/}
				 <h1>Basic Calculator</h1>
				 <Calculator/>
			</div>
		);
	}
}