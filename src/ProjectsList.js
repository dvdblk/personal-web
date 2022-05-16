import React from "react";
import ProjectCard from "./ProjectCard";

class ProjectsList extends React.Component {
    render() {
        return (
            <div className="album py-4">
                <div className="container">
                    <div className="row row-cols-auto justify-content-center">
                        {this.props.data &&
                            this.props.data.projects.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        project={project}
                                        tags={this.props.data.tags}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsList;
