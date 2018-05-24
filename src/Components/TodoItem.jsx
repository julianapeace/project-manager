import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todoItem.title}</strong> - {this.props.todoItem.completed}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todoItem: PropTypes.object,
}


export default TodoItem;
