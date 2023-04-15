import React, { Component } from 'react';

class AddTodo extends Component{
	state={
		title:''
	}
	onChangeTitle = (e) =>{
		this.setState({
			[e.target.name]:e.target.value
		});
	}
	onSubmit = (e) =>{
		e.preventDefault();
		this.props.addItem(this.state.title);
		this.setState({title:''});
	}
	render(){
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input type="text"
					name="title" 
					value= {this.state.title}
					onChange = {this.onChangeTitle}
					/>
					<input type="submit"
					value="Submit"
					/>
				</form>
			</div>
		);
	}
}

export default AddTodo;
