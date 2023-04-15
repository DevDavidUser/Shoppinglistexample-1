import React, { Component } from 'react'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
class App extends Component{
	state ={
		todos:[{
			id:1, 
			title:"Mario Party",
			completed:true
		},
		{
			id:2,
			title:"Mario Bros",
			completed:false
		},
		{
			id:3,
			title:"Mario Galaxy",
			completed:false
		}
		]
	}
	markComplete = (id) =>{
		this.setState({todos: this.state.todos.map(todo =>{
			if(todo.id === id){
				todo.completed = !todo.completed
			}
			return todo;
		})});
	}
	deleteItem = (id) =>{
		this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
	}
	addItem = (title) =>{
		const newTodo ={
			id:4,
			title,
			completed:false
		}
		this.setState({todos : [...this.state.todos,newTodo]});
	}
	render(){
		return (
			<div>
				<AddTodo addItem={this.addItem}/>
				<Todos todos={this.state.todos} markComplete={this.markComplete} deleteItem={this.deleteItem} />
			</div>
		);
	}
}

export default App;
