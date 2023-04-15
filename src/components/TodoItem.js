import React, { Component } from 'react';

class TodoItem extends Component{
	getStyle = () =>{
		return {
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}
	render(){
		const {id,title} = this.props.todo;
		return (
			<div>
				<input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
				<h1 style={this.getStyle()}>{title}</h1>
				<button onClick={this.props.deleteItem.bind(this,id)}>x</button>
			</div>
		);
	}
}

export default TodoItem;
