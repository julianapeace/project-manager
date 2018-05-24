import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id){
    // you want to delete from the main component.
    //you are two compnents deep.
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.projectitem.title}</strong> - {this.props.projectitem.category}

        <a href="#" onClick={this.deleteProject.bind(this, this.props.projectitem.id)}>X</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  projectitem: PropTypes.object,
  onDelete: PropTypes.func,
}


export default ProjectItem;
