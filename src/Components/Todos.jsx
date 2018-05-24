import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    let todoItems;
    if(this.props.todos.length > 0){
      todoItems = this.props.todos.map(todo => {
        // console.log(project)
        return (
          <TodoItem key={todo.title} todoItem={todo}/>
        )
      });
    }
    if(this.props.todos.length === 0){
      return(
        <div className="Todos">
          No Todos, Matey
        </div>
      )
    }
    // console.log(this.props)
    return (
      <div className="Todos">
      <h3>Latest Todos</h3>
        {todoItems}
      </div>
    );
  }
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default Todos;
