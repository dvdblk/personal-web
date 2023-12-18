import React from "react";

class ProjectCard extends React.Component {
    render() {
        return (
            <div className="col-md-4">
                <div className="card border-light">
                    <a
                        href={this.props.project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="stretched-link text-decoration-none"
                        style={{ color: "inherit" }}
                    >
                        <h4>
                            {this.props.project.name}
                            {this.props.project.wip && (
                                <span
                                    class="badge bg-secondary"
                                    style={{ marginLeft: "10px" }}
                                >
                                    WIP 🚧
                                </span>
                            )}
                        </h4>
                    </a>

                    <p>{this.props.project.description}</p>

                    <div className="row row-cols-auto">
                        {this.props.project.tags &&
                            this.props.project.tags.map((tag, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="badge rounded-pill badge-custom text-dark"
                                    >
                                        <img
                                            src={this.props.tags[tag].url}
                                            alt=""
                                            width="24"
                                            height="24"
                                        />
                                        <span>{this.props.tags[tag].name}</span>
                                    </span>
                                );
                            })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
