import React from "react";
import ProjectCard from "./ProjectCard";

class ProjectsList extends React.Component {
    render() {
        return (
            <div className="row album py-4" style={{ minHeight: "400px" }}>
                <div className="container-fluid">
                    <div className="row gy-5 gx-5 row-cols-auto justify-content-center">
                        {this.props.data &&
                            this.props.data.map((project, index) => {
                                return (
                                    <ProjectCard
                                        key={index}
                                        project={project}
                                        tags={this.props.tags}
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
