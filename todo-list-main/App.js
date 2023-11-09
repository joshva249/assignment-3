import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    todos: [],
    newTodo: '',
  };

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== '') {
      this.setState({
        todos: [...todos, newTodo],
        newTodo: '',
      });
    }
  };

  deleteTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div className="App">
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={newTodo}
            onChange={this.handleInputChange}
            placeholder="Add a new todo"
            
          />
          <button onClick={this.addTodo}>Add</button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => this.deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
