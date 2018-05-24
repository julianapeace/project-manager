import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
class Projects extends Component {
  deleteProject(id){
      this.props.onDelete(id)
  }

  render() {
    let projectItems;
    if(this.props.projects.length > 0){
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem projectitem={project} key={project.title} onDelete={this.deleteProject.bind(this)}/>
        )
      });
    }
    if(this.props.projects.length === 0){
      return(
        <div className="Projects">
          No Projects, Matey
        </div>
      )
    }
    // console.log(this.props)
    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
}

export default Projects;
